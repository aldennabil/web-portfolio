import { Locale } from '../types'
import { PROJECTS_DATA } from '../data/projects'
import { messages } from '../i18n/messages'
import { Navigate } from '../hooks/usePortfolioLocation'
import { ProjectSpotlight } from './ProjectSpotlight'
import { ProjectArchive } from './ProjectArchive'

export function ProjectsSection({ lang, navigate }: { lang: Locale; navigate: Navigate }) {
  const t = messages(lang)
  const selected = PROJECTS_DATA.filter(p => p.portfolio?.spotlightOrder).sort((a, b) => a.portfolio!.spotlightOrder! - b.portfolio!.spotlightOrder!)
  return <section id="projects" className="page-section" aria-labelledby="projects-title" tabIndex={-1}>
    <div className="section-heading"><span className="section-number meta">02 / {t.projects}</span><h2 id="projects-title">{t.selectedTitle}<span className="heading-dot">.</span></h2></div>
    <div className="spotlight-grid">{selected.map((project, index) => <ProjectSpotlight key={project.id} {...{ project, index, lang, navigate }} />)}</div>
    <ProjectArchive lang={lang} navigate={navigate} />
  </section>
}
