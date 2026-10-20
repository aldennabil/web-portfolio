import React from 'react'
import { Experience } from '../types'
import { X } from 'lucide-react'

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
  onImageClick: (imgSrc: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  onImageClick
}) => {
  if (!experience) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={18} />
        </button>

        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '0.4rem' }}>
          ORGANIZATIONAL LEADERSHIP
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.3rem' }}>
          {experience.role}
        </h2>

        <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1.25rem' }}>
          {experience.organization} ({experience.period})
        </div>

        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
          Key Milestones &amp; Responsibilities:
        </h4>

        <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
          {experience.highlights.map((h, idx) => (
            <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {h}
            </li>
          ))}
        </ul>

        {/* Gallery */}
        {experience.gallery && experience.gallery.length > 0 && (
          <div className="modal-gallery-strip">
            <div className="modal-gallery-title">
              <span>📸 Organization &amp; Team Documentation ({experience.gallery.length} photos)</span>
            </div>
            <div className="modal-gallery-grid">
              {experience.gallery.slice(0, 5).map((img, idx) => (
                <div 
                  key={idx} 
                  className="gallery-thumb-item"
                  onClick={() => onImageClick(img)}
                >
                  <img src={img} className="gallery-thumb-img" alt={`Team Photo ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
