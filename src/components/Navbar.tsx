import { Locale } from '../types'
import { messages } from '../i18n/messages'
import { Navigate } from '../hooks/usePortfolioLocation'

export function Navbar({ lang, navigate, languageHref }: {
  lang: Locale; navigate: Navigate; languageHref: (lang: Locale) => string;
}) {
  const t = messages(lang)
  const home = `?lang=${lang}#about`
  return <header className="site-header"><div className="header-inner">
    <a className="brand" href={home} onClick={event => navigate(home, event)} aria-label={t.home}>
      <span>Alden Nabil Wibowo Effendy<span className="brand-sub">{t.navRoles}</span></span>
    </a>
    <nav aria-label={lang === 'en' ? 'Main navigation' : 'Navigasi utama'}>
      {[{ id: 'why-me', label: t.whyMe }, ...(['projects', 'experience', 'contact'] as const).map(id => ({ id, label: t[id] }))].map(item => <a key={item.id} href={`?lang=${lang}#${item.id}`} onClick={event => navigate(`?lang=${lang}#${item.id}`, event)}>{item.label}</a>)}
    </nav>
    <div className="language-switch" aria-label="Language / Bahasa">
      {(['en', 'id'] as const).map(code => <a key={code} href={languageHref(code)} lang={code} aria-label={code === 'en' ? 'English' : 'Bahasa Indonesia'} aria-current={lang === code ? 'true' : undefined} onClick={event => navigate(languageHref(code), event)}>{code.toUpperCase()}</a>)}
    </div>
  </div></header>
}
