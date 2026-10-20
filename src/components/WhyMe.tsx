import { Locale } from '../types'
import { Navigate } from '../hooks/usePortfolioLocation'
import { messages } from '../i18n/messages'
import { SkillToolkit } from './SkillToolkit'
import { CompetencyMatrix } from './CompetencyMatrix'
import { CredentialsSection } from './CredentialsSection'

export function WhyMe({ lang, navigate }: { lang: Locale; navigate: Navigate }) {
  const t = messages(lang)
  return <section id="why-me" className="why-me-section" aria-labelledby="why-me-title" tabIndex={-1}>
    <div className="why-me-heading"><h2 id="why-me-title">{t.whyMe}</h2></div>
    <SkillToolkit lang={lang} />
    <CompetencyMatrix lang={lang} navigate={navigate} />
    <CredentialsSection lang={lang} />
  </section>
}
