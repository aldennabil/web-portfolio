import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { Locale } from '../types'
import { locationHref, parseLocation } from '../lib/url-state'

function readLocation() {
  let preference: Locale = 'en'
  try { if (localStorage.getItem('portfolio-language') === 'id') preference = 'id' } catch { /* Storage is optional. */ }
  return parseLocation(window.location.search, preference)
}

export function usePortfolioLocation() {
  const [location, setLocation] = useState(readLocation)
  useEffect(() => {
    const onPop = () => { setLocation(readLocation()); requestAnimationFrame(() => window.scrollTo(0, Number(history.state?.scrollY ?? 0))) }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  useEffect(() => {
    document.documentElement.lang = location.lang
    try { localStorage.setItem('portfolio-language', location.lang) } catch { /* Storage is optional. */ }
  }, [location.lang])
  const navigate = useCallback((href: string, event?: MouseEvent<HTMLAnchorElement>) => {
    if (event && (event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || event.currentTarget.target === '_blank')) return
    event?.preventDefault()
    history.replaceState({ ...history.state, scrollY: window.scrollY }, '')
    const next = new URL(href, window.location.href)
    const changingPage = next.searchParams.get('project') !== new URLSearchParams(window.location.search).get('project')
    const currentLocale = readLocation().lang
    const changingLanguage = parseLocation(next.search, currentLocale).lang !== currentLocale
    history.pushState({ scrollY: changingPage || next.hash !== window.location.hash ? 0 : window.scrollY }, '', href)
    setLocation(readLocation())
    if (changingPage || (next.hash && !changingLanguage)) requestAnimationFrame(() => {
      const element = next.hash ? document.getElementById(next.hash.slice(1)) : document.getElementById('main-content')
      element?.focus({ preventScroll: true })
      if (next.hash) element?.scrollIntoView()
      else window.scrollTo(0, 0)
    })
  }, [])
  return { ...location, navigate, languageHref: (lang: Locale) => locationHref(window.location.search, { lang }) + window.location.hash }
}

export type Navigate = ReturnType<typeof usePortfolioLocation>['navigate']
