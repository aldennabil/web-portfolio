import { useState } from 'react'

export function ProjectImage({ src, alt, eager = false }: { src?: string; alt: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false)
  return <div className="project-image">{src && !failed
    ? <img src={src} alt={alt} width="960" height="540" loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
    : <div className="image-fallback"><span className="meta">ANALYTICAL WORK</span><span>{alt}</span></div>}
  </div>
}
