import { spawn } from 'node:child_process'
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import assert from 'node:assert/strict'

const root = process.cwd()
const output = path.join(root, '.superpowers/portfolio-rebuild')
const profile = path.join(os.tmpdir(), `portfolio-browser-${Date.now()}`)
mkdirSync(profile, { recursive: true })
const executable = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync)
if (!executable) throw new Error('No installed Chromium browser found')
const base = process.env.PORTFOLIO_TEST_URL ?? 'http://127.0.0.1:4317'
const browser = spawn(executable, ['--headless=new', '--disable-gpu', '--disable-background-networking', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=0', `--user-data-dir=${profile}`, base], { windowsHide: true, stdio: 'ignore' })
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
let socket
let sequence = 0
const pending = new Map()
const errors = []
async function until(fn, message) {
  const deadline = Date.now() + 20000
  while (Date.now() < deadline) { if (await fn()) return; await sleep(100) }
  throw new Error(`Timed out: ${message}`)
}
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout ${method}`)) }, 20000)
    pending.set(id, { resolve: value => { clearTimeout(timer); resolve(value) }, reject })
    socket.send(JSON.stringify({ id, method, params }))
  })
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text)
  return result.result.value
}
async function ready() { await until(() => evaluate(`Boolean(document.querySelector('.site-header')) && document.readyState === 'complete'`), 'page ready'); await evaluate('document.fonts.ready.then(() => true)'); await sleep(150) }
async function screenshot(name) { const result = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); writeFileSync(path.join(output, name), Buffer.from(result.data, 'base64')) }
try {
  await until(() => existsSync(path.join(profile, 'DevToolsActivePort')), 'browser start')
  const port = readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim()
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
  const target = targets.find(t => t.type === 'page')
  socket = new WebSocket(target.webSocketDebuggerUrl)
  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data)
    if (data.id && pending.has(data.id)) { const waiter = pending.get(data.id); pending.delete(data.id); data.error ? waiter.reject(new Error(data.error.message)) : waiter.resolve(data.result) }
    if (data.method === 'Runtime.exceptionThrown') errors.push(data.params.exceptionDetails.text)
  })
  await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }))
  await send('Runtime.enable'); await send('Page.enable')
  await send('Network.enable'); await send('Network.setCacheDisabled', { cacheDisabled: true })
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `window.__vitals={lcp:0,cls:0};new PerformanceObserver(l=>{for(const e of l.getEntries())window.__vitals.lcp=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__vitals.cls+=e.value}).observe({type:'layout-shift',buffered:true})` })
  await send('Page.reload', { ignoreCache: true }); await sleep(100)
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  await ready()
  for (const selector of ['.hero-actions .primary', ...['data-science','statistics-risk','bi-systems'].map(id => `.simple-intersection[href$="skills-${id}"]`)]) {
    await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`)
    await sleep(150)
    const position = await evaluate(`(() => { const target=document.querySelector(location.hash);return {top:target?.getBoundingClientRect().top,focus:document.activeElement===target,hash:location.hash} })()`)
    assert.ok(position.top >= 0 && position.top < 300, `hero destination is visible: ${JSON.stringify(position)}`)
    assert.ok(position.focus, `hero destination receives keyboard focus: ${position.hash}`)
  }
  await evaluate(`document.querySelector('.brand').click()`)
  await sleep(150)
  assert.equal(await evaluate(`document.querySelectorAll('.archive-card').length`), 21)
  assert.equal(await evaluate(`document.querySelectorAll('.spotlight').length`), 4)
  await screenshot('desktop.png')
  const coldMetrics=await evaluate(`({vitals:window.__vitals,resources:performance.getEntriesByType('resource').map(r=>({name:r.name.split('/').pop(),bytes:r.transferSize})),domContentLoaded:performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd})`)
  writeFileSync(path.join(output,'browser-metrics.json'),JSON.stringify(coldMetrics,null,2))
  for (const width of [375, 768, 1440]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width === 375 })
    assert.ok(await evaluate(`document.documentElement.scrollWidth <= innerWidth`), `horizontal overflow at ${width}`)
    for (const selector of ['.hero-actions .primary', '.simple-intersection:last-child', ...['why-me','projects','experience','contact'].map(id => `.site-header nav a[href$="#${id}"]`)]) {
      await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`)
      await sleep(100)
      assert.ok(await evaluate(`(() => {const target=document.querySelector(location.hash),rect=target.getBoundingClientRect();return rect.top<innerHeight && rect.top>=document.querySelector('.site-header').getBoundingClientRect().bottom && document.activeElement===target})()`), `visible focused destination at ${width}: ${selector}`)
    }
    await evaluate(`document.querySelector('.brand').click()`)
    await sleep(100)
    if (width === 375) {
      await screenshot('mobile.png')
      await evaluate(`document.querySelector('.language-switch a[lang=id]').click()`); await until(() => evaluate(`document.documentElement.lang==='id'`), 'mobile language')
      await evaluate(`document.querySelector('.hero-actions .primary').click()`)
      await sleep(100)
      assert.ok(await evaluate(`location.hash==='#projects' && document.documentElement.lang==='id' && document.querySelector('#projects').getBoundingClientRect().top<300`), 'Indonesian hero destination')
      await evaluate(`document.querySelector('.brand').click()`)
      await sleep(100)
      assert.ok(await evaluate(`document.documentElement.scrollWidth <= innerWidth`), 'Indonesian overflow at 375px')
      await screenshot('mobile-id.png')
      await evaluate(`document.querySelector('.language-switch a[lang=en]').click()`); await until(() => evaluate(`document.documentElement.lang==='en'`), 'restore English')
    }
  }
  await evaluate(`document.querySelector('#projects').scrollIntoView()`); await screenshot('projects.png')
  assert.equal(await evaluate(`document.querySelectorAll('.category-card').length`), 5)
  assert.equal(await evaluate(`document.querySelectorAll('.archive input,.archive select').length`), 0)
  assert.equal(await evaluate(`document.querySelectorAll('.toolkit-row').length`), 2)
  assert.ok(await evaluate(`document.querySelectorAll('.compact-skill').length>=30`))
  assert.ok(await evaluate(`Array.from(document.querySelectorAll('.compact-skill')).every(el=>el.getBoundingClientRect().height<=65)`), 'compact skill cards')
  assert.ok(await evaluate(`document.querySelector('[data-skill=excel]').innerText.includes('Unrated')`))
  assert.equal(await evaluate(`document.querySelectorAll('.simple-intersection').length`), 3)
  assert.equal(await evaluate(`document.querySelector('.portrait-caption')`), null)
  assert.equal(await evaluate(`document.querySelectorAll('.social-card').length`), 4)
  assert.equal(await evaluate(`document.querySelector('.social-card[href*=instagram]').getAttribute('href')`), 'https://instagram.com/aldennabilwe')
  assert.ok(await evaluate(`document.querySelector('.profile-location').innerText.includes('Greater Jakarta, Indonesia')`))
  assert.ok(await evaluate(`Boolean(document.querySelector('#why-me #credentials-track'))`))
  assert.equal(await evaluate(`document.querySelector('#experience #credentials-track')`), null)
  assert.equal(await evaluate(`document.querySelectorAll('.intersection-card').length`), 3)
  assert.ok(await evaluate(`document.querySelector('.brand').textContent.includes('Alden Nabil Wibowo Effendy')`))
  assert.equal(await evaluate(`document.querySelector('.brand-monogram')`), null)
  assert.ok(await evaluate(`document.querySelector('#hero-title').textContent.includes('Alden Effendy')`))
  assert.ok(await evaluate(`!document.querySelector('#experience').innerText.includes('DEKA') && !document.querySelector('#experience').innerText.includes('FinSight')`))
  for (const [category, count] of [['data-science',5],['statistics-risk',7],['bi-systems',5],['others',4],['all',21]]) {
    await evaluate(`document.querySelector('[data-category="${category}"]').click()`)
    await until(() => evaluate(`document.querySelectorAll('.archive-card').length===${count}`), `category ${category}`)
  }
  const heights = await evaluate(`Array.from(document.querySelectorAll('.spotlight')).map(el=>el.getBoundingClientRect().height)`)
  assert.ok(Math.max(...heights)-Math.min(...heights)<2, 'consistent selected-card heights')
  await evaluate(`document.querySelector('#archive-track').scrollLeft=0`)
  await evaluate(`document.querySelector('.project-rail .rail-controls button:last-child').click()`)
  await until(() => evaluate(`document.querySelector('#archive-track').scrollLeft>20`), 'horizontal project control')
  await evaluate(`document.querySelector('#experience').scrollIntoView()`); await screenshot('experience.png')
  assert.ok(await evaluate(`document.querySelector('#experience-track').scrollWidth>document.querySelector('#experience-track').clientWidth`), 'experience scrolls locally')
  assert.ok(await evaluate(`document.querySelector('#credentials-track').scrollWidth>document.querySelector('#credentials-track').clientWidth`), 'credentials scroll locally')
  await evaluate(`document.querySelector('.skill-toolkit').scrollIntoView()`); await screenshot('toolkit.png')
  await evaluate(`document.querySelector('[data-subskill=forecasting]').focus();document.querySelector('[data-subskill=forecasting]').click()`)
  await until(() => evaluate(`Boolean(document.querySelector('.subskill-dialog[open]'))`), 'subskill popup opens')
  assert.equal(await evaluate(`document.querySelectorAll('.subskill-projects li').length`), 1)
  assert.ok(await evaluate(`document.querySelector('.subskill-dialog').innerText.includes('Commodity Price')`))
  assert.equal(await evaluate(`document.body.style.overflow`), 'hidden')
  await screenshot('subskill-dialog.png')
  await send('Input.dispatchKeyEvent', { type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9,modifiers:8 })
  await send('Input.dispatchKeyEvent', { type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9,modifiers:8 })
  assert.ok(await evaluate(`document.querySelector('.subskill-dialog').contains(document.activeElement)`), 'popup contains keyboard focus')
  await send('Input.dispatchKeyEvent', { type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9 })
  await send('Input.dispatchKeyEvent', { type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9 })
  assert.ok(await evaluate(`document.activeElement===document.querySelector('.subskill-dialog-heading button')`), 'forward Tab wraps to close button')
  await send('Input.dispatchKeyEvent', { type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27 })
  await send('Input.dispatchKeyEvent', { type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27 })
  await until(() => evaluate(`!document.querySelector('.subskill-dialog')`), 'Escape closes popup')
  assert.ok(await evaluate(`document.activeElement===document.querySelector('[data-subskill=forecasting]')`), 'popup restores trigger focus')
  await evaluate(`document.querySelector('[data-subskill=bayesian]').click()`)
  await until(() => evaluate(`Boolean(document.querySelector('.subskill-dialog[open]'))`), 'Bayesian popup opens')
  assert.equal(await evaluate(`document.querySelectorAll('.subskill-projects li').length`), 1)
  await evaluate(`document.querySelector('.subskill-projects a').click()`)
  await until(() => evaluate(`Boolean(document.querySelector('.case-study'))`), 'subskill opens its case study')
  assert.equal(await evaluate(`new URLSearchParams(location.search).get('project')`), 'bayesian-spatial')
  assert.equal(await evaluate(`document.querySelector('.subskill-dialog')`), null)
  assert.equal(await evaluate(`document.body.style.overflow`), '')
  await evaluate(`document.querySelector('.case-back').click()`)
  await until(() => evaluate(`!document.querySelector('.case-study')`), 'return from subskill case study')
  await evaluate(`document.querySelector('[data-subskill=forecasting]').click()`)
  await until(() => evaluate(`Boolean(document.querySelector('.subskill-dialog[open]'))`), 'popup before history change')
  await evaluate(`history.back()`)
  await until(() => evaluate(`Boolean(document.querySelector('.case-study')) && !document.querySelector('.subskill-dialog')`), 'history dismisses popup on page change')
  assert.equal(await evaluate(`document.body.style.overflow`), '')
  await evaluate(`history.forward()`)
  await until(() => evaluate(`!document.querySelector('.case-study')`), 'history returns home')
  await evaluate(`document.querySelector('#archive').scrollIntoView()`); await screenshot('archive.png')
  await evaluate(`document.querySelector('.spotlight img').dispatchEvent(new Event('error'))`)
  assert.ok(await evaluate(`Boolean(document.querySelector('.spotlight .image-fallback'))`), 'readable broken-image fallback')
  await evaluate(`document.querySelector('.spotlight a').click()`)
  await until(() => evaluate(`Boolean(document.querySelector('.case-study h1'))`), 'case study')
  assert.ok(await evaluate(`document.querySelector('.case-study').innerText.includes('Teammates led model selection')`))
  await screenshot('case-study.png')
  await evaluate(`window.scrollTo(0,600)`); await sleep(50)
  await evaluate(`document.querySelector('.language-switch a[lang=id]').click()`)
  await until(() => evaluate(`document.documentElement.lang==='id' && document.querySelector('.case-study').innerText.includes('Kontribusi saya')`), 'Indonesian case')
  assert.equal(await evaluate(`new URLSearchParams(location.search).get('project')`), 'gammafest')
  assert.equal(await evaluate(`history.state.scrollY`), 600, 'language switch keeps scroll position')
  await evaluate(`history.back()`)
  await until(() => evaluate(`document.documentElement.lang==='en'`), 'language back')
  await evaluate(`history.forward()`); await until(() => evaluate(`document.documentElement.lang==='id'`), 'language forward')
  assert.equal(await evaluate(`scrollY`), 600, 'forward restores language entry scroll')
  await evaluate(`history.back()`); await until(() => evaluate(`document.documentElement.lang==='en'`), 'language back again')
  await evaluate(`history.back()`)
  await until(() => evaluate(`!document.querySelector('.case-study')`), 'case back')
  await evaluate(`history.forward()`)
  await until(() => evaluate(`Boolean(document.querySelector('.case-study'))`), 'case forward')
  await send('Page.navigate', { url: `${base}/?project=missing&lang=id` })
  await until(() => evaluate(`Boolean(document.querySelector('.not-found'))`), 'invalid case')
  await send('Page.navigate', { url: `${base}/?project=commodity-ts&lang=id` })
  await until(() => evaluate(`Boolean(document.querySelector('.case-study .translation-note'))`), 'English fallback')
  assert.ok(await evaluate(`Boolean(document.querySelector('.case-copy[lang=en]'))`))
  await send('Page.navigate', { url: `${base}/?lang=en#contact` }); await ready()
  await evaluate(`Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw new Error('denied')}},configurable:true})`)
  await evaluate(`document.querySelector('.copy-row button').click()`)
  await until(() => evaluate(`document.querySelector('.copy-row [role=status]').textContent.includes('Could not copy')`), 'clipboard failure')
  await evaluate(`Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{}},configurable:true})`)
  await evaluate(`document.querySelector('.copy-row button').click()`)
  await until(() => evaluate(`document.querySelector('.copy-row [role=status]').textContent==='Email copied.'`), 'clipboard success')
  assert.deepEqual(errors, [], 'browser runtime errors')
  console.log('Browser checks passed: 21 project cards, five category filters, compact two-row toolkit, subskill dialogs, portrait socials, grouped Why Me, uniform spotlights, horizontal project/experience/credential rails, mobile EN-ID, history, fallbacks and clipboard states.')
} finally {
  if (socket?.readyState === WebSocket.OPEN) { await send('Browser.close').catch(() => {}); socket.close() }
  browser.kill()
}
