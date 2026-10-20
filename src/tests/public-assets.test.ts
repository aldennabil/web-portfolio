import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { PROJECTS_DATA } from '../data/projects'
import { CERTIFICATIONS_DATA } from '../data/certifications'
import { RATED_SKILLS } from '../data/skills'

describe('published evidence', () => {
  it('every referenced local image, certificate and artifact exists', () => {
    const urls = PROJECTS_DATA.flatMap(p => [p.image, ...(p.artifacts?.extraUrls?.map(a => a.url) ?? [])])
    urls.push(...RATED_SKILLS.flatMap(skill => (skill.logos ?? []).map(logo => `/images/tools/${logo}.svg`)))
    urls.push(...CERTIFICATIONS_DATA.flatMap(c => [c.image, c.pdfUrl]), '/resume.pdf', '/images/portrait.jpg')
    const missing = urls.filter((url): url is string => Boolean(url?.startsWith('/'))).filter(url => !existsSync(path.resolve('public', '.' + decodeURIComponent(url))))
    expect(missing).toEqual([])
  })
  it('public text exports contain no Windows user paths and notebooks remain valid JSON', () => {
    for (const project of PROJECTS_DATA) for (const artifact of project.artifacts?.extraUrls ?? []) {
      if (!/\.(html?|ipynb|rmd|md|r|py)$/i.test(artifact.url)) continue
      const text = readFileSync(path.resolve('public', '.' + decodeURIComponent(artifact.url)), 'utf8')
      expect(text, artifact.url).not.toMatch(/[A-Za-z]:[\\/]+Users[\\/]+/)
      if (/\.ipynb$/i.test(artifact.url)) expect(() => JSON.parse(text), artifact.url).not.toThrow()
    }
  })
})
