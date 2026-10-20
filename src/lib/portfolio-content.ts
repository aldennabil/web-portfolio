import { Locale, LocalizedText, Project } from '../types'

export function localized(value: LocalizedText, locale: Locale) {
  const translated = locale === 'id' && Boolean(value.id?.trim())
  return { text: translated ? value.id! : value.en, lang: translated ? 'id' as const : 'en' as const, fallback: locale === 'id' && !translated }
}

export function projectSummary(project: Project, locale: Locale) {
  return localized(project.portfolio?.summary ?? { en: project.summary, id: project.summaryId }, locale)
}

export function projectHref(projectId: string, lang: Locale) {
  return `?project=${encodeURIComponent(projectId)}&lang=${lang}`
}
