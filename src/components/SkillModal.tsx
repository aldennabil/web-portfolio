import React from 'react'
import { Project } from '../types'
import { X, ArrowRight } from 'lucide-react'

interface SkillModalProps {
  skillName: string | null;
  matchedProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const SkillModal: React.FC<SkillModalProps> = ({
  skillName,
  matchedProjects,
  onClose,
  onSelectProject
}) => {
  if (!skillName) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={18} />
        </button>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.3rem' }}>
          SKILL PROOF &amp; CASE STUDIES
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
          Projects using "{skillName}"
        </h2>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Click any matched project below to inspect the complete methodology and results:
        </p>

        <div>
          {matchedProjects.map((project) => (
            <div
              key={project.id}
              className="matched-project-item"
              onClick={() => onSelectProject(project)}
            >
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                  {project.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>
                  {project.award || project.category} • {project.period}
                </div>
              </div>
              <ArrowRight size={18} color="var(--accent-cyan)" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
