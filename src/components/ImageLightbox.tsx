import React from 'react'
import { X, ExternalLink } from 'lucide-react'

interface ImageLightboxProps {
  imageSrc: string | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  imageSrc,
  onClose
}) => {
  if (!imageSrc) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{ zIndex: 11000, background: 'rgba(0, 0, 0, 0.92)' }}
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          style={{ top: '-15px', right: '-15px' }}
        >
          <X size={18} />
        </button>

        <img 
          src={imageSrc} 
          alt="Full Size Preview" 
          style={{
            maxWidth: '100%',
            maxHeight: '82vh',
            objectFit: 'contain',
            borderRadius: '12px',
            border: '1px solid var(--border-glass-hover)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 242, 254, 0.25)'
          }}
        />

        <a
          href={imageSrc}
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: '1rem',
            color: 'var(--accent-cyan)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            textDecoration: 'none'
          }}
        >
          <span>Open Full Original Document</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  )
}
