import { useEffect, useRef } from 'react'
import { Locale } from '../types'
import { Subskill } from '../data/skills'
import { PROJECTS_DATA } from '../data/projects'
import { localized, projectHref, projectSummary } from '../lib/portfolio-content'
import { projectsForSubskill } from '../lib/project-filters'
import { Navigate } from '../hooks/usePortfolioLocation'

export function SubskillProjectsDialog({ skill, lang, navigate, onClose }: {
  skill: Subskill; lang: Locale; navigate: Navigate; onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const projects = projectsForSubskill(PROJECTS_DATA, skill)
  useEffect(() => {
    const element = dialog.current!
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [])
  useEffect(() => {
    window.addEventListener('popstate', onClose)
    return () => window.removeEventListener('popstate', onClose)
  }, [onClose])
  return <dialog ref={dialog} className="subskill-dialog" aria-labelledby="subskill-dialog-title" onCancel={event => { event.preventDefault(); onClose() }}
    onKeyDown={event => {
      if (event.key !== 'Tab') return
      const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]')
      const first = controls[0], last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }}
    onClick={event => {
      if (event.target !== event.currentTarget) return
      const rect = event.currentTarget.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose()
    }}>
    <div className="subskill-dialog-heading"><div><span className="meta">{lang === 'id' ? 'Proyek terkait' : 'Related projects'} / {projects.length}</span><h2 id="subskill-dialog-title">{localized(skill, lang).text}</h2></div><button type="button" onClick={onClose} aria-label={lang === 'id' ? 'Tutup dialog' : 'Close dialog'} autoFocus>×</button></div>
    <ul className="subskill-projects">{projects.map(project => {
      const href = projectHref(project.id, lang)
      return <li key={project.id}><a href={href} onClick={event => {
        if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) onClose()
        navigate(href, event)
      }}><span className="subskill-project-title">{project.title}<span aria-hidden="true">↗</span></span><p>{projectSummary(project, lang).text}</p><span className="meta">{project.tags.slice(0, 3).join(' / ')}</span></a></li>
    })}</ul>
  </dialog>
}
