import { RATED_SKILLS } from '../data/skills'
import { localized } from '../lib/portfolio-content'
import { Locale } from '../types'
import { messages } from '../i18n/messages'
import { HorizontalRail } from './HorizontalRail'

export function SkillToolkit({ lang }: { lang: Locale }) {
  const t = messages(lang)
  const rows = [
    { id: 'technical', label: t.technicalTools, skills: RATED_SKILLS.filter(skill => skill.kind !== 'people') },
    { id: 'nontechnical', label: t.nontechnicalTools, skills: RATED_SKILLS.filter(skill => skill.kind === 'people') },
  ]
  return <div className="skill-toolkit" aria-labelledby="toolkit-title">
    <div className="subheading"><h3 id="toolkit-title">{t.toolkit}</h3><span className="toolkit-score-note">{t.selfRated}</span></div>
    {rows.map(row => <div className="toolkit-row" key={row.id}>
      <h4 className="toolkit-row-label">{row.label}</h4>
      <HorizontalRail id={`${row.id}-toolkit-track`} label={row.label} lang={lang} compact className="toolkit-rail">
        {row.skills.map(skill => <article className="rated-skill compact-skill" key={skill.id} data-skill={skill.id}>
          <div className="compact-skill-mark" aria-hidden="true">{skill.logos?.[0] ? <img src={`/images/tools/${skill.logos[0]}.svg`} width="19" height="19" alt="" /> : <span>{skill.name.en.slice(0, 2).toUpperCase()}</span>}</div>
          <h4>{localized(skill.name, lang).text}</h4>
          <span className={`rating-value ${skill.score === null ? 'unrated' : ''}`}>{skill.score === null ? (lang === 'id' ? 'Belum dinilai' : 'Unrated') : `${skill.score}/5`}</span>
        </article>)}
      </HorizontalRail>
    </div>)}
    <details className="rating-guide"><summary>{t.ratingScale}</summary><p>{t.ratingGuide}</p></details>
  </div>
}
