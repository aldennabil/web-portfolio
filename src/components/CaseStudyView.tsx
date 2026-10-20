import { Locale, LocalizedText, Project } from '../types'
import { messages } from '../i18n/messages'
import { localized } from '../lib/portfolio-content'
import { Navigate } from '../hooks/usePortfolioLocation'
import { ProjectImage } from './ProjectImage'

export default function CaseStudyView({ project, lang, navigate }: { project?: Project; lang: Locale; navigate: Navigate }) {
  const t = messages(lang), home = `?lang=${lang}#projects`
  if (!project) return <div className="not-found"><span className="meta">404</span><h1>{t.notFound}</h1><p>{t.notFoundNote}</p><a className="button" href={home} onClick={e => navigate(home, e)}>{t.back}</a></div>
  const editorial = project.portfolio!
  const caption = editorial.caption ? localized(editorial.caption, lang) : null
  const block = (title: string, value?: LocalizedText) => {
    if (!value?.en) return null
    const content = localized(value, lang)
    return <section className="case-block"><h2>{title}</h2>{content.fallback && <p className="translation-note">{t.fallback}</p>}<p className="case-copy" lang={content.lang}>{content.text}</p></section>
  }
  const artifacts = [...(project.artifacts?.extraUrls ?? [])]
  if (project.githubUrl) artifacts.unshift({ label: 'GitHub', url: project.githubUrl })
  if (project.demoUrl) artifacts.unshift({ label: lang === 'id' ? 'Aplikasi' : 'Application', url: project.demoUrl })
  if (project.paperUrl) artifacts.push({ label: 'Research report', url: project.paperUrl })
  return <article className="case-study">
    <a className="text-link case-back" href={home} onClick={e => navigate(home, e)}>← {t.back}</a>
    <header className="case-header"><div className="meta">{localized(editorial.status, lang).text} / {project.period}</div><h1>{project.title}</h1><p className="case-deck">{localized(editorial.summary, lang).text}</p><div className="case-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></header>
    <div className="case-layout"><div className="case-main">
      <figure><a href={project.image} target="_blank" rel="noreferrer" aria-label={t.figure}><ProjectImage src={project.image} alt={project.title} eager /></a>{caption && <figcaption lang={caption.lang}>{caption.fallback && <span>{t.fallback} </span>}{caption.text}</figcaption>}</figure>
      {block(t.problem, editorial.problem ?? { en: project.problem })}
      {block(t.role, editorial.contribution)}
      {block(t.team, editorial.teamContribution)}
      {block(t.method, editorial.methodology ?? { en: project.methodology })}
      {block(t.findings, editorial.results ?? { en: project.results })}
      {block(t.limitations, editorial.limitations)}
    </div><aside className="case-sources"><span className="meta">{t.sources}</span>{artifacts.length ? <ul>{artifacts.map((a, i) => <li key={`${a.url}-${i}`}><a href={a.url} target="_blank" rel="noreferrer">{a.label}<span aria-hidden="true">↗</span></a></li>)}</ul> : <p>{t.noSources}</p>}</aside></div>
  </article>
}
