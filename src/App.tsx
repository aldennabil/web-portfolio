import { Component, lazy, ReactNode, Suspense, useEffect } from 'react'
import { PROJECTS_DATA } from './data/projects'
import { Locale } from './types'
import { messages } from './i18n/messages'
import { usePortfolioLocation } from './hooks/usePortfolioLocation'
import { Navbar } from './components/Navbar'
import { PortfolioHome } from './components/PortfolioHome'
const CaseStudyView=lazy(()=>import('./components/CaseStudyView'))
class CaseBoundary extends Component<{ children: ReactNode; lang: Locale },{ failed: boolean }> {
 state={failed:false}
 static getDerivedStateFromError(){return {failed:true}}
 render(){const t=messages(this.props.lang);return this.state.failed?<div className="empty-state"><p>{t.failed}</p><button className="button" onClick={()=>window.location.reload()}>{t.retry}</button></div>:this.props.children}
}
export function App(){
 const location=usePortfolioLocation(), {lang,projectId,navigate,languageHref}=location, t=messages(lang)
 const project=PROJECTS_DATA.find(p=>p.id===projectId)
 useEffect(()=>{document.title=`${project?.title??'Applied Data Science'} | Alden Nabil`;const meta=document.querySelector('meta[name="description"]');meta?.setAttribute('content',project?.portfolio?.summary[lang]??project?.summary??t.intro)},[project,lang,t.intro])
 return <><a className="skip-link" href="#main-content">{t.skip}</a><Navbar lang={lang} navigate={navigate} languageHref={languageHref}/><main id="main-content" className="container" tabIndex={-1}><div hidden={projectId!==null}><PortfolioHome lang={lang} navigate={navigate}/></div>{projectId!==null&&<CaseBoundary key={projectId} lang={lang}><Suspense fallback={<p className="loading-state" role="status">{t.loading}</p>}><CaseStudyView project={project} lang={lang} navigate={navigate}/></Suspense></CaseBoundary>}</main><footer className="site-footer container"><span>© {new Date().getFullYear()} {t.authored}</span><span>{t.footer}</span></footer></>
}
export default App
