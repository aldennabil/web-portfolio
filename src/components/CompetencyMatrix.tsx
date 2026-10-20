import { useCallback, useState } from 'react'
import { SKILL_CATEGORIES, Subskill } from '../data/skills'
import { localized } from '../lib/portfolio-content'
import { Locale } from '../types'
import { messages } from '../i18n/messages'
import { Navigate } from '../hooks/usePortfolioLocation'
import { SubskillProjectsDialog } from './SubskillProjectsDialog'

export function CompetencyMatrix({ lang, navigate }: { lang: Locale; navigate: Navigate }) {
  const t = messages(lang)
  const [selected, setSelected] = useState<Subskill | null>(null)
  const closeDialog = useCallback(() => setSelected(null), [])
  return <div className="competency-section" aria-labelledby="intersections-title">
    <div className="subheading"><h3 id="intersections-title">{t.why}</h3></div>
    <div className="intersection-grid">
      {SKILL_CATEGORIES.map(category => <article className="intersection-card" id={`skills-${category.id}`} key={category.id} tabIndex={-1}>
        <h4>{localized(category.label, lang).text}</h4>
        <ul className="subskill-list">{category.subskills.map(skill => <li key={skill.key}><button type="button" data-subskill={skill.key} aria-haspopup="dialog" onClick={() => setSelected(skill)}><span>{localized(skill, lang).text}</span><span aria-hidden="true">↗</span></button></li>)}</ul>
      </article>)}
    </div>
    {selected && <SubskillProjectsDialog skill={selected} lang={lang} navigate={navigate} onClose={closeDialog} />}
  </div>
}
