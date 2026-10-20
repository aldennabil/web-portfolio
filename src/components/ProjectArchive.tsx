import { useState } from 'react'
import { Locale } from '../types'
import { PROJECTS_DATA } from '../data/projects'
import { messages } from '../i18n/messages'
import { ARCHIVE_CATEGORIES, archiveProjects } from '../lib/project-filters'
import { localized, projectHref, projectSummary } from '../lib/portfolio-content'
import { Navigate } from '../hooks/usePortfolioLocation'
import { ProjectImage } from './ProjectImage'
import { HorizontalRail } from './HorizontalRail'

export function ProjectArchive({ lang, navigate }: { lang: Locale; navigate: Navigate }) {
  const t = messages(lang)
  const [category, setCategory] = useState('all')
  const projects = archiveProjects(PROJECTS_DATA, category)
  return <div className="archive" id="archive">
    <div className="archive-heading"><div><h3>{t.archive}</h3><p>{t.archiveNote}</p></div><span className="count meta" role="status">{projects.length} / {PROJECTS_DATA.length} {t.results}</span></div>
    <div className="archive-categories" role="group" aria-label={t.category}>
      {ARCHIVE_CATEGORIES.map(item => <button type="button" key={item.id} data-category={item.id} className="category-card" aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>
        <span>{localized(item.label, lang).text}</span><span className="category-count">{archiveProjects(PROJECTS_DATA, item.id).length.toString().padStart(2, '0')}</span>
      </button>)}
    </div>
    <HorizontalRail key={category} id="archive-track" label={t.archive} lang={lang} className="project-rail">
      {projects.map(project => {
        const href = projectHref(project.id, lang)
        return <article className="archive-card" key={project.id}>
          <a className="archive-image-link" href={href} onClick={event => navigate(href, event)} aria-label={`${t.caseStudy}: ${project.title}`}><ProjectImage src={project.image} alt={project.title} /></a>
          <div className="archive-card-content">
            <span className="meta">{project.period}</span>
            <h4><a href={href} onClick={event => navigate(href, event)}>{project.title}</a></h4>
            <p>{projectSummary(project, lang).text}</p>
            <ul className="project-skill-tags" aria-label={lang === 'en' ? 'Skills used' : 'Kemampuan yang digunakan'}>{project.tags.slice(0, 4).map(tag => <li key={tag}>{tag}</li>)}</ul>
            <a className="text-link" href={href} onClick={event => navigate(href, event)}>{t.caseStudy}<span aria-hidden="true">↗</span></a>
          </div>
        </article>
      })}
    </HorizontalRail>
  </div>
}
