import { ProjectEditorial } from '../types'

export function generatedProjectIds(source: string): string[] {
  const assignment = source.indexOf('export const PROJECTS_DATA')
  const start = source.indexOf('=', assignment)
  if (assignment < 0 || start < 0) throw new Error('Cannot read generated project data')
  const projects = JSON.parse(source.slice(start + 1).trim().replace(/;$/, '')) as Array<{ id: string }>
  return projects.map(project => project.id)
}

export function redactLocalPaths(text: string) {
  const redact = (value: string) => value.replace(/(?:file:\/\/\/)?[A-Za-z]:[\\/]+(?:Users|Alden)[\\/]+[^\r\n"'<>`]*/g, '[local file]')
  // Parse notebook JSON first so escaped code quotes and newlines stay valid.
  const visit = (value: unknown): unknown => typeof value === 'string' ? redact(value)
    : Array.isArray(value) ? value.map(visit)
    : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item)])) : value
  try { return JSON.stringify(visit(JSON.parse(text)), null, 2) } catch { return redact(text) }
}

export function plainText(text: string) {
  return text.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*|`|__/g, '').replace(/^\s*[-*]\s+/gm, '').replace(/\u2014/g, ',').trim()
}

export function extractSections(content: string) {
  const marker = /^##\s+.*(?:Versi Bahasa Indonesia|Indonesian Version).*$/im.exec(content)
  const english = marker ? content.slice(0, marker.index) : content
  const indonesian = marker ? content.slice(marker.index) : ''
  const section = (body: string, names: string[]) => {
    const headings = [...body.matchAll(/^#{2,3}\s+(?:\d+\.\s*)?(.+)\r?\n/gm)]
    for (let i = 0; i < headings.length; i++) {
      if (names.some(name => headings[i][1].trim().toLowerCase() === name.toLowerCase())) {
        const start = headings[i].index! + headings[i][0].length
        return plainText(body.slice(start, headings[i + 1]?.index ?? body.length).split(/^---\s*$/m)[0])
      }
    }
    return ''
  }
  return {
    problem: section(english, ['Background & Problem Statement', 'Problem & Objectives', 'Problem']),
    methodology: section(english, ['Methodology', 'Methodology & Modeling']),
    results: section(english, ['Results & Impact', 'Results & Key Findings', 'Results & Policy Impact', 'Results & Business Impact', 'Results']),
    dataScope: section(english, ['Data Collection & Source', 'Data & Variables', 'Data & Scope', 'Data']),
    urgency: section(english, ['Urgency']),
    problemId: section(indonesian, ['Latar Belakang & Masalah']),
  }
}

export function publicEditorial(value: Record<string, unknown>): ProjectEditorial {
  const keys = ['spotlightOrder', 'status', 'summary', 'contribution', 'teamContribution', 'problem', 'methodology', 'results', 'limitations', 'caption', 'image', 'competencyIds']
  const output: Record<string, unknown> = {}
  for (const key of keys) if (value[key] !== undefined) output[key] = value[key]
  const claims = (value.claims ?? []) as Array<{ statement: unknown; status: string; publicUrl?: string }>
  output.claims = claims.filter(claim => claim.status === 'verified' || claim.status === 'estimated').map(claim => ({ statement: claim.statement, status: claim.status, ...(claim.publicUrl ? { publicUrl: claim.publicUrl } : {}) }))
  return output as unknown as ProjectEditorial
}
