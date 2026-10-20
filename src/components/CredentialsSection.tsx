import { Locale } from '../types'
import { CERTIFICATIONS_DATA } from '../data/certifications'
import { messages } from '../i18n/messages'
import { HorizontalRail } from './HorizontalRail'
import { ProjectImage } from './ProjectImage'

export function CredentialsSection({ lang }: { lang: Locale }) {
  const t = messages(lang)
  const credentials = [...CERTIFICATIONS_DATA].sort((a, b) => Number(Boolean(b.isFeatured)) - Number(Boolean(a.isFeatured)) || b.year - a.year)
  return <div className="credentials">
    <div className="archive-heading"><h3>{t.myCredentials}</h3><span className="meta">{credentials.length}</span></div>
    <HorizontalRail id="credentials-track" label={t.myCredentials} lang={lang} className="credential-rail">
      {credentials.map(item => <article className="credential-card" key={item.id} lang="en">
        <a href={item.pdfUrl ?? item.image} target="_blank" rel="noreferrer" aria-label={item.title}><ProjectImage src={item.image} alt={item.title} /></a>
        <div className="credential-content"><span className="meta">{item.year} / {item.issuer.split('•')[0].trim()}</span><h4>{item.title}</h4><a className="text-link" lang={lang} href={item.pdfUrl ?? item.image} target="_blank" rel="noreferrer">{t.viewCredential}<span aria-hidden="true">↗</span></a></div>
      </article>)}
    </HorizontalRail>
  </div>
}
