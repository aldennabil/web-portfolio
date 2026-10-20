import { Locale } from '../types'

export function parseLocation(search: string, preference: Locale = 'en') {
  const params = new URLSearchParams(search)
  const lang = params.get('lang')
  return { lang: lang === 'en' || lang === 'id' ? lang : preference, projectId: params.get('project') }
}

export function locationHref(search: string, change: { lang?: Locale; projectId?: string | null }) {
  const params = new URLSearchParams(search)
  if (change.lang) params.set('lang', change.lang)
  if (change.projectId === null) params.delete('project')
  else if (change.projectId !== undefined) params.set('project', change.projectId)
  return params.size ? `?${params.toString()}` : ''
}
