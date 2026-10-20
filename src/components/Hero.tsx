import { Locale } from '../types'
import { messages } from '../i18n/messages'
import { PROFILE_DATA } from '../data/profile'
import { SKILL_CATEGORIES } from '../data/skills'
import { localized } from '../lib/portfolio-content'
import { ProfileSocials } from './ProfileSocials'
import { Navigate } from '../hooks/usePortfolioLocation'

export function Hero({ lang, navigate }: { lang: Locale; navigate: Navigate }) {
  const t = messages(lang)
  const award = `?lang=${lang}&project=gammafest`
  const projectsHref = `?lang=${lang}#projects`
  return <section id="about" className="hero-section" aria-labelledby="hero-title" tabIndex={-1}>
    <div className="hero-grid">
      <div className="hero-copy">
        <span className="hero-eyebrow">{t.eyebrow}</span>
        <h1 id="hero-title"><span>Alden</span>{' '}<em>Effendy</em></h1>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-intersections">{SKILL_CATEGORIES.map(category => {
          const href = `?lang=${lang}#skills-${category.id}`
          return <a className="simple-intersection" href={href} onClick={event => navigate(href, event)} key={category.id}>{localized(category.label, lang).text}</a>
        })}</div>
        <div className="hero-actions">
          <a className="button primary" href={projectsHref} onClick={event => navigate(projectsHref, event)}>{t.selected}<span aria-hidden="true">↗</span></a>
          <a className="text-link" href={PROFILE_DATA.resumePath} download>{t.cv}<span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <aside className="identity">
        <div className="portrait-wrap"><img src="/images/portrait.jpg" width="480" height="520" alt="Alden Nabil Wibowo Effendy" fetchPriority="high" /></div>
        <ProfileSocials />
        <div className="identity-record">
          <p>{t.degree}<br /><strong>{t.program}</strong></p>
          <div className="academic-line"><span>IPB University</span><span className="gpa">3.83<span> / 4.00</span></span></div>
          <a href={award} onClick={event => navigate(award, event)} className="award-line"><span aria-hidden="true">↗</span>{t.distinction}</a>
        </div>
      </aside>
    </div>
  </section>
}
