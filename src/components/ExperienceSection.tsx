import { Locale } from '../types'
import { EXPERIENCE_DATA } from '../data/experience'
import { messages } from '../i18n/messages'
import { Navigate } from '../hooks/usePortfolioLocation'
import { HorizontalRail } from './HorizontalRail'

// Retained for parent compatibility; experience no longer routes to academic projects.
export function ExperienceSection({ lang }: { lang: Locale; navigate: Navigate }) {
  const t = messages(lang)
  const experience = [...EXPERIENCE_DATA].sort((a, b) => a.id === 'ta-psd' ? -1 : b.id === 'ta-psd' ? 1 : 0)
  return <section id="experience" className="page-section" aria-labelledby="experience-title" tabIndex={-1}>
    <div className="section-heading"><span className="section-number meta">03 / {t.experience}</span><h2 id="experience-title">{t.experienceTitle}<span className="heading-dot">.</span></h2><p>{t.experienceNote}</p></div>
    <div className="experience-heading"><h3>{t.teaching}</h3>{lang === 'id' && <p className="translation-note">{t.fallback}</p>}</div>
    <HorizontalRail id="experience-track" label={t.experience} lang={lang} className="experience-rail">
      {experience.map(item => <article className="experience-card" key={item.id} lang="en">
        <span className="meta">{item.period}</span>
        <h4>{item.role.replace(/\u2014/g, ',')}</h4>
        <p className="organization">{item.organization}</p>
        <p className="experience-summary">{item.summary}</p>
        <details><summary lang={lang}>{t.details}</summary><div className="experience-detail"><p>{item.summary}</p><ul>{item.highlights.map((text, i) => <li key={i}>{text.replace(/\u2014/g, ',')}</li>)}</ul></div></details>
      </article>)}
    </HorizontalRail>
  </section>
}
