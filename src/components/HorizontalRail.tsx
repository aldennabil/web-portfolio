import { ReactNode, useEffect, useRef, useState } from 'react'
import { Locale } from '../types'

export function HorizontalRail({ id, label, lang, children, className = '', compact = false }: {
  id: string; label: string; lang: Locale; children: ReactNode; className?: string; compact?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null)
  const [previous, setPrevious] = useState(false)
  const [next, setNext] = useState(false)
  const update = () => {
    const el = track.current
    if (!el) return
    setPrevious(el.scrollLeft > 2)
    setNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }
  useEffect(() => {
    update()
    const observer = new ResizeObserver(update)
    if (track.current) observer.observe(track.current)
    return () => observer.disconnect()
  }, [children])
  const scroll = (direction: number) => {
    const el = track.current
    el?.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  return <div className={`horizontal-rail ${compact ? 'compact-rail' : ''} ${className}`}>
    <div className="rail-toolbar">
      <span className="meta">{lang === 'id' ? 'Geser untuk melihat selengkapnya' : 'Scroll to see more'}</span>
      <div className="rail-controls">
        <button type="button" aria-label={`${lang === 'id' ? 'Sebelumnya' : 'Previous'}: ${label}`} aria-controls={id} disabled={!previous} onClick={() => scroll(-1)}>←</button>
        <button type="button" aria-label={`${lang === 'id' ? 'Berikutnya' : 'Next'}: ${label}`} aria-controls={id} disabled={!next} onClick={() => scroll(1)}>→</button>
      </div>
    </div>
    <div id={id} className="rail-track" ref={track} role="region" aria-label={label} tabIndex={0} onScroll={update}
      onKeyDown={event => {
        if (event.target === event.currentTarget && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
          event.preventDefault()
          scroll(event.key === 'ArrowRight' ? 1 : -1)
        }
      }}>{children}</div>
  </div>
}
