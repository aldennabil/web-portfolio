import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { SKILL_CATEGORIES, RATED_SKILLS } from '../data/skills'
import { PROJECTS_DATA } from '../data/projects'
import { archiveProjects, ARCHIVE_CATEGORIES } from '../lib/project-filters'
import { Navbar } from '../components/Navbar'
import { ExperienceSection } from '../components/ExperienceSection'
import { messages } from '../i18n/messages'

describe('portfolio refinement', () => {
  it('offers five category controls that partition the full archive without losing projects', () => {
    expect(ARCHIVE_CATEGORIES.map(c => c.id)).toEqual(['all', 'data-science', 'statistics-risk', 'bi-systems', 'others'])
    const groups = ARCHIVE_CATEGORIES.slice(1).flatMap(c => archiveProjects(PROJECTS_DATA, c.id).map(p => p.id))
    expect(groups.length).toBe(21)
    expect(new Set(groups).size).toBe(21)
    expect(archiveProjects(PROJECTS_DATA, 'others').some(p => p.id === 'agrimine')).toBe(true)
    expect(archiveProjects(PROJECTS_DATA, 'data-science').some(p => p.id === 'gammafest')).toBe(true)
  })
  it('exposes three intersections with usable subskills and valid evidence links', () => {
    expect(SKILL_CATEGORIES).toHaveLength(3)
    const ids = new Set(PROJECTS_DATA.map(p => p.id))
    for (const category of SKILL_CATEGORIES) {
      expect(category.subskills.length).toBeGreaterThanOrEqual(3)
      expect(category.projectIds.every(id => ids.has(id))).toBe(true)
    }
    for (const skill of RATED_SKILLS) expect(skill.score === null || (skill.score >= 1 && skill.score <= 5)).toBe(true)
  })
  it('keeps the personal overview within the requested 30 words in both languages', () => {
    for (const lang of ['en', 'id'] as const) expect(messages(lang).intro.trim().split(/\s+/).length).toBeLessThanOrEqual(30)
  })
  it('identifies the full name and student status without the old monogram', () => {
    const html = renderToStaticMarkup(<Navbar lang="en" navigate={() => {}} languageHref={lang => `?lang=${lang}`} />)
    expect(html).toContain('Alden Nabil Wibowo Effendy')
    expect(html).toContain('Student')
    expect(html).not.toContain('brand-monogram')
  })
  it('keeps coursework collaborations out of the experience presentation', () => {
    const html = renderToStaticMarkup(<ExperienceSection lang="en" navigate={() => {}} />)
    expect(html).not.toContain('DEKA')
    expect(html).not.toContain('FinSight')
    expect(html).toContain('Teaching Assistant')
  })
})
