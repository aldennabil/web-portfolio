import { Locale, Project } from '../types'
import { messages } from '../i18n/messages'
import { localized, projectHref, projectSummary } from '../lib/portfolio-content'
import { Navigate } from '../hooks/usePortfolioLocation'
import { ProjectImage } from './ProjectImage'

export function ProjectSpotlight({ project, lang, navigate, index }: { project: Project; lang: Locale; navigate: Navigate; index: number }) {
  const t = messages(lang), editorial = project.portfolio!, href = projectHref(project.id, lang)
  return <article className={`spotlight spotlight-${index + 1}`}>
    <a className="spotlight-image-link" href={href} onClick={e => navigate(href, e)} aria-label={`${t.caseStudy}: ${project.title}`}><ProjectImage src={project.image} alt={project.title} /></a>
    <div className="spotlight-content">
      <div className="project-meta meta"><span>0{index + 1} / {localized(editorial.status, lang).text}</span><span>{project.period}</span></div>
      <h3><a href={href} onClick={e => navigate(href, e)}>{projectSummary(project, lang).text}</a></h3>
      <p className="project-name">{project.title}</p>
      {editorial.contribution && <p className="contribution"><span className="field-label">{t.role}</span>{localized(editorial.contribution, lang).text}</p>}
      <div className="spotlight-bottom"><span className="tools">{project.tags.slice(0, 3).join(' / ')}</span><a className="text-link" href={href} onClick={e => navigate(href, e)}>{t.caseStudy} <span aria-hidden="true">↗</span></a></div>
    </div>
  </article>
}
