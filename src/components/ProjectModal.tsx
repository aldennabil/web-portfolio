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

        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '0.4rem' }}>
          {project.award || project.category} • {project.period}
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.25rem' }}>
          {project.title}
        </h2>

        {project.image && (
          <div 
            className="modal-cover-wrap" 
            onClick={() => onImageClick(project.image!)}
            title="Click to view full image in lightbox"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-cover-img"
            />
          </div>
        )}

        {/* Problem */}
        <div style={{ marginBottom: '1.1rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.3rem' }}>
            Problem:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {project.problem}
          </p>
        </div>

        {/* Methodology */}
        <div style={{ marginBottom: '1.1rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
            Methodology:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {project.methodology}
          </p>
        </div>

        {/* Results */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.3rem' }}>
            Impact &amp; Results:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {project.results}
          </p>
        </div>

        {/* Urgency & Context if available */}
        {project.urgency && (
          <div style={{ marginBottom: '1.1rem' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.3rem' }}>
              Urgency:
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {project.urgency}
            </p>
          </div>
        )}

        {/* Data Scope if available */}
        {project.dataScope && (
          <div style={{ marginBottom: '1.1rem' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-purple, #a78bfa)', marginBottom: '0.3rem' }}>
              Data Collection &amp; Scope:
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {project.dataScope}
            </p>
          </div>
        )}

        {/* Action Links & Artifacts Row */}
        <div className="modal-links-row" style={{ flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link btn-modal-github"
            >
              <Github size={14} />
              <span>GitHub Code</span>
              <ExternalLink size={12} />
            </a>
          )}

          {(project.paperUrl || project.artifacts?.paperUrl) && (
            <a 
              href={project.paperUrl || project.artifacts?.paperUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link btn-modal-paper"
            >
              <FileText size={14} />
              <span>Read Paper (PDF)</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.artifacts?.rReportUrl && (
            <a 
              href={project.artifacts.rReportUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link"
              style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}
            >
              <FileText size={14} />
              <span>Interactive R Report</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.artifacts?.posterUrl && (
            <a 
              href={project.artifacts.posterUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link"
              style={{ background: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fbbf24' }}
            >
              <FileText size={14} />
              <span>Research Poster</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.artifacts?.slidesUrl && (
            <a 
              href={project.artifacts.slidesUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link"
              style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: 'rgba(168, 85, 247, 0.4)', color: '#c084fc' }}
            >
              <FileText size={14} />
              <span>Presentation Slides</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.artifacts?.notebookUrl && (
            <a 
              href={project.artifacts.notebookUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link"
              style={{ background: 'rgba(234, 88, 12, 0.15)', borderColor: 'rgba(234, 88, 12, 0.4)', color: '#fb923c' }}
            >
              <FileText size={14} />
              <span>Jupyter Notebook</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.artifacts?.datasetUrl && (
            <a 
              href={project.artifacts.datasetUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modal-link"
              style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.4)', color: '#60a5fa' }}
            >
              <FileText size={14} />
              <span>Dataset &amp; Data</span>
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
