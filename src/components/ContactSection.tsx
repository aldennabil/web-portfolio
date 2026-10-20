import { useEffect, useRef, useState } from 'react'
import { Locale } from '../types'
import { messages } from '../i18n/messages'
import { PROFILE_DATA as profile } from '../data/profile'
export function ContactSection({ lang }: { lang: Locale }) {
 const t=messages(lang), [status,setStatus]=useState<'idle'|'success'|'error'>('idle')
 const timer=useRef<ReturnType<typeof setTimeout>>()
 const mounted=useRef(true)
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;clearTimeout(timer.current)}},[])
 const copy=async()=>{clearTimeout(timer.current);try{await navigator.clipboard.writeText(profile.email);if(mounted.current)setStatus('success')}catch{if(mounted.current)setStatus('error')}if(mounted.current)timer.current=setTimeout(()=>setStatus('idle'),4000)}
 return <section id="contact" className="page-section contact-section" aria-labelledby="contact-title" tabIndex={-1}><span className="section-number meta">04 / {t.contact}</span><div className="contact-layout"><div><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactNote}</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><div className="copy-row"><button className="text-button" onClick={copy}>{t.copy}</button><span role="status">{status==='success'?t.copied:status==='error'?t.copyFailed:''}</span></div></div><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.resumePath} download>{t.cv} ↓</a><p className="meta">{t.based}</p></div></div></section>
}
