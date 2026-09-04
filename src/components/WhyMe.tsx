import React from 'react'
import { CompetencyPillar } from '../types'

interface WhyMeProps {
  pillars: CompetencyPillar[];
  activeTab: 'skills' | 'certs';
  onTabChange: (tab: 'skills' | 'certs') => void;
  onSkillClick: (skillName: string, projectIds: string[]) => void;
}

export const WhyMe: React.FC<WhyMeProps> = ({
  pillars,
  activeTab,
  onTabChange,
  onSkillClick
}) => {
  return (
    <section id="why-me" className="section-wrapper">
      <div style={{ textAlign: 'center' }}>
        <h2 className="section-title">Why Me?</h2>
        <p className="section-summary-pitch">
          Bridging rigorous statistical theory with production-grade BI engineering, predictive machine learning, and decision risk modeling to drive measurable business impact.
        </p>

        {/* Segmented Tab Switcher */}
        <div className="segment-toggle-container">
          <div className="segment-toggle">
            <button 
              className={`segment-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => onTabChange('skills')}
            >
              Technical Skills &amp; Pillars
            </button>
            <button 
              className={`segment-btn ${activeTab === 'certs' ? 'active' : ''}`}
              onClick={() => onTabChange('certs')}
            >
              Certifications &amp; Credentials
            </button>
          </div>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      {activeTab === 'skills' && (
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div className="pillar-icon-box">
                {pillar.iconType === 'bulb' && (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                )}
                {pillar.iconType === 'robot' && (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="5" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4M8 16h.01M16 16h.01M9 21v1M15 21v1"/>
                  </svg>
                )}
                {pillar.iconType === 'percentage' && (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 5L5 19M6.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm11 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
                  </svg>
                )}
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>

              <div className="skills-button-list">
                {pillar.skills.map((skill) => (
                  <button
                    key={skill.id}
                    className="skill-btn"
                    onClick={() => onSkillClick(skill.name, skill.projectIds)}
                    title={`View projects using ${skill.name}`}
                  >
                    <span>{skill.name}</span>
                    <span className="skill-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
