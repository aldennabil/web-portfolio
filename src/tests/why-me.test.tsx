import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { SKILL_CATEGORIES, RATED_SKILLS } from '../data/skills'
import { PROJECTS_DATA } from '../data/projects'
import { projectsForSubskill } from '../lib/project-filters'
import { WhyMe } from '../components/WhyMe'
import { ExperienceSection } from '../components/ExperienceSection'

describe('compact Why Me and project evidence', () => {
  it('maps subskills to specific, existing evidence instead of returning an entire category', () => {
    const forecasting = SKILL_CATEGORIES[0].subskills[0]
    const bayesian = SKILL_CATEGORIES[1].subskills[1]
    expect(projectsForSubskill(PROJECTS_DATA, forecasting).map(project => project.id)).toEqual(['commodity-ts'])
    expect(projectsForSubskill(PROJECTS_DATA, bayesian).map(project => project.id)).toEqual(['bayesian-spatial'])
    for (const category of SKILL_CATEGORIES) for (const skill of category.subskills) {
      expect(projectsForSubskill(PROJECTS_DATA, skill).length).toBe(skill.projectIds.length)
      expect(skill.projectIds.length).toBeGreaterThan(0)
    }
  })
  it('preserves supplied scores while leaving added tools unassessed', () => {
    expect(RATED_SKILLS.find(skill => skill.id === 'cleaning')?.score).toBe(5)
    expect(RATED_SKILLS.find(skill => skill.id === 'excel')?.score).toBeNull()
    expect(RATED_SKILLS.find(skill => skill.id === 'spss')?.score).toBeNull()
    expect(RATED_SKILLS.filter(skill => skill.kind === 'people').length).toBeGreaterThan(1)
  })
  it('groups toolkit, clickable subskills and credentials in Why Me without duplicate experience credentials', () => {
    const html = renderToStaticMarkup(<WhyMe lang="en" navigate={() => {}} />)
    expect(html).toContain('My toolkit')
    expect(html).toContain('My credentials')
    expect(html).toContain('Where my skills connect')
    expect(html).toContain('aria-haspopup="dialog"')
    expect(html).not.toContain('Three complementary strengths')
    const experience = renderToStaticMarkup(<ExperienceSection lang="en" navigate={() => {}} />)
    expect(experience).not.toContain('credentials-track')
  })
})
