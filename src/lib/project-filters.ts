import { Project } from '../types'
import { SKILL_CATEGORIES, Subskill } from '../data/skills'

export function projectsForSubskill(projects: Project[], skill: Subskill) {
  return projects.filter(project => skill.projectIds.includes(project.id))
}

export const ARCHIVE_CATEGORIES = [
  { id: 'all', label: { en: 'All projects', id: 'Semua proyek' } },
  ...SKILL_CATEGORIES.map(({ id, label }) => ({ id, label })),
  { id: 'others', label: { en: 'Others', id: 'Lainnya' } },
]

const GROUP_PROJECTS: Record<string, readonly string[]> = {
  'data-science': ['gammafest', 'commodity-ts', 'superconductor', 'nox-stacked', 'bank-insurance'],
  'statistics-risk': ['bayesian-spatial', 'hiv-survival', 'stunting-sem', 'boxcox-gdp', 'consulting-anova', 'cox-heart', 'credit-risk-ka'],
  'bi-systems': ['deka', 'finsight', 'coffeeshop', 'susenas', 'gsmarena-psd'],
}

export function archiveProjects(projects: Project[], category: string) {
  if (category === 'all') return filterProjects(projects, {})
  if (category === 'others') return filterProjects(projects.filter(project => !Object.values(GROUP_PROJECTS).some(ids => ids.includes(project.id))), {})
  return filterProjects(projects.filter(project => GROUP_PROJECTS[category]?.includes(project.id)), {})
}

export function filterProjects(projects: Project[], filters: { query?: string; category?: string; competencyId?: string }) {
  const query = filters.query?.trim().toLocaleLowerCase() ?? ''
  return projects.filter(project => {
    const text = [project.title, project.summary, project.summaryId, project.portfolio?.summary.en, project.portfolio?.summary.id, ...project.tags].join(' ').toLocaleLowerCase()
    return (!query || text.includes(query)) && (!filters.category || project.category === filters.category) && (!filters.competencyId || project.portfolio?.competencyIds.includes(filters.competencyId))
  }).sort((a, b) => (a.id === 'commodity-ts' ? -1 : b.id === 'commodity-ts' ? 1 : (a.portfolio?.spotlightOrder ?? 99) - (b.portfolio?.spotlightOrder ?? 99)))
}
