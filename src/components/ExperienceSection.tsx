import React from 'react'
import { Experience } from '../types'

interface ExperienceSectionProps {
  experiences: Experience[];
  onExperienceClick: (exp: Experience) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onExperienceClick
}) => {
  return (
    <section id="experience" className="section-wrapper">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="section-title">Experience &amp; Leadership</h2>
        <p className="section-summary-pitch">
          7 key leadership and consulting roles across organizations, academic research labs, national competitions, and data administration.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="exp-card"
            onClick={() => onExperienceClick(exp)}
          >
            <div 
              className="exp-header-badge"
              style={{ background: exp.badgeGradient }}
            >
              <span>{exp.badgeText}</span>
            </div>

            <div className="exp-body">
              <span className="exp-period">{exp.period}</span>
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-org">{exp.organization}</span>
              <p className="exp-desc">{exp.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
