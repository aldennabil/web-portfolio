import React from 'react'
import { Project } from '../types'
import { Github, FileText, ExternalLink, X } from 'lucide-react'

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onImageClick: (imgSrc: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onImageClick
}) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={18} />
        </button>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.4rem' }}>
          {project.award || project.category} • {project.period}
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.25rem' }}>
          {project.title}
        </h2>

        {/* Problem */}
        <div style={{ marginBottom: '1.1rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '0.3rem' }}>
            Problem:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {project.problem}
          </p>
        </div>

        {/* Methodology */}
        <div style={{ marginBottom: '1.1rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.3rem' }}>
            Methodology:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {project.methodology}
          </p>
        </div>

        {/* Results */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.3rem' }}>
            Impact &amp; Results:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {project.results}
          </p>
        </div>

        {/* Action Links */}
        {(project.githubUrl || project.paperUrl || project.demoUrl) && (
          <div className="modal-links-row">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-modal-link btn-modal-github"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
                <ExternalLink size={12} />
              </a>
            )}

            {project.paperUrl && (
              <a 
                href={project.paperUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-modal-link btn-modal-paper"
              >
                <FileText size={14} />
                <span>Read Published Paper</span>
                <ExternalLink size={12} />
              </a>
            )}

            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-modal-link btn-modal-demo"
              >
                <ExternalLink size={14} />
                <span>Live Demo / App</span>
              </a>
            )}
          </div>
        )}

        {/* Multi-Photo Gallery (Up to 5 images) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="modal-gallery-strip">
            <div className="modal-gallery-title">
              <span>📸 Project Artifacts &amp; Visuals ({project.gallery.length} photos)</span>
            </div>
            <div className="modal-gallery-grid">
              {project.gallery.slice(0, 5).map((img, idx) => (
                <div 
                  key={idx} 
                  className="gallery-thumb-item" 
                  onClick={() => onImageClick(img)}
                >
                  <img src={img} className="gallery-thumb-img" alt={`Artifact ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
