import { Locale } from '../types'
import { Navigate } from '../hooks/usePortfolioLocation'
import { Hero } from './Hero'
import { WhyMe } from './WhyMe'
import { ProjectsSection } from './ProjectsSection'
import { ExperienceSection } from './ExperienceSection'
import { ContactSection } from './ContactSection'
export function PortfolioHome({ lang, navigate }: { lang: Locale; navigate: Navigate }) {
 return <><Hero lang={lang} navigate={navigate}/><WhyMe lang={lang} navigate={navigate}/><ProjectsSection lang={lang} navigate={navigate}/><ExperienceSection lang={lang} navigate={navigate}/><ContactSection lang={lang}/></>
}
