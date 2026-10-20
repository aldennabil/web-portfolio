import { describe, it, expect } from 'vitest'
import { filterProjects } from '../lib/project-filters'
import { parseLocation, locationHref } from '../lib/url-state'
import { localized } from '../lib/portfolio-content'
import { extractSections, publicEditorial, redactLocalPaths, generatedProjectIds } from '../lib/project-source'
import { PROJECTS_DATA } from '../data/projects'

describe('portfolio navigation and content', () => {
  it('combines search and category and resets without losing projects', () => {
    expect(filterProjects(PROJECTS_DATA, { query: 'football', category: 'Predictive ML' }).map(p => p.id)).toEqual(['gammafest'])
    expect(filterProjects(PROJECTS_DATA, { query: 'not-a-real-project' })).toEqual([])
    expect(filterProjects(PROJECTS_DATA, {}).length).toBe(21)
  })
  it('preserves unknown parameters and selected project while switching language', () => {
    expect(locationHref('?project=gammafest&lang=en&utm_source=cv', { lang: 'id' })).toBe('?project=gammafest&lang=id&utm_source=cv')
    expect(parseLocation('?project=missing&lang=xx', 'id')).toEqual({ lang: 'id', projectId: 'missing' })
    expect(locationHref('?project=gammafest&lang=id', { projectId: null })).toBe('?lang=id')
  })
  it('returns a coherent English fallback with the actual content language', () => {
    expect(localized({ en: 'A complete English section' }, 'id')).toEqual({ text: 'A complete English section', lang: 'en', fallback: true })
    expect(localized({ en: 'English', id: 'Indonesia' }, 'id')).toEqual({ text: 'Indonesia', lang: 'id', fallback: false })
  })
  it('extracts exact section headings without merging English and Indonesian', () => {
    const result = extractSections('## English Version\n### 1. Background & Problem Statement\nEnglish problem\n### 4. Methodology\nEnglish method\n### 5. Results & Impact\nEnglish result\n## Versi Bahasa Indonesia\n### 1. Latar Belakang & Masalah\nMasalah Indonesia')
    expect(result.problem).toBe('English problem')
    expect(result.results).toBe('English result')
    expect(result.problemId).toBe('Masalah Indonesia')
  })
  it('reads project identity without confusing Indonesian locale keys for IDs', () => {
    expect(generatedProjectIds('export const PROJECTS_DATA: Project[] = [{"id":"one","portfolio":{"summary":{"en":"English","id":"Indonesia"}}}]')).toEqual(['one'])
  })
  it('redacts machine-specific paths from published report exports', () => {
    expect(redactLocalPaths('read_csv("C:/Users/Alden/data.csv")')).toBe('read_csv("[local file]")')
    const notebook = JSON.stringify({ source: 'read_csv("C:\\Users\\Alden\\data.csv")' })
    expect(JSON.parse(redactLocalPaths(notebook)).source).toBe('read_csv("[local file]")')
    expect(redactLocalPaths('source: https://example.com/report')).toBe('source: https://example.com/report')
  })
  it('excludes internal source paths and unverified claims from public editorial output', () => {
    const result = publicEditorial({ summary: { en: 'Safe summary' }, claims: [
      { statement: { en: '99% improvement' }, status: 'unverified', sourcePath: 'private/file.pdf' },
      { statement: { en: 'Estimated manual workflow' }, status: 'estimated', sourcePath: 'private/notes.md', publicUrl: 'https://example.com/report' }
    ] })
    expect(result.claims).toEqual([{ statement: { en: 'Estimated manual workflow' }, status: 'estimated', publicUrl: 'https://example.com/report' }])
    expect(JSON.stringify(result)).not.toContain('private/')
  })
})
