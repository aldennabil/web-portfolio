import React from 'react'
import { Profile } from '../types'
import { Github, Linkedin, BookOpen, Mail, MapPin } from 'lucide-react'

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="section-wrapper" style={{ paddingTop: '5.5rem' }}>
      <div className="hero-content">
        
        {/* Centered Avatar */}
        <div className="avatar-wrapper">
          <img 
            src={profile.avatarPath} 
            alt={profile.fullName} 
            className="avatar-img"
          />
          <div className="avatar-badge" title="Data Science Student">
            🎓
          </div>
        </div>

        {/* Hero Title & Bio */}
        <h1 className="hero-title">
          {profile.fullName}
        </h1>

        <p className="hero-tagline">
          Statistics &amp; Data Science undergraduate at <strong>{profile.university}</strong> (GPA: <strong>{profile.gpa}</strong>) specializing in Tabular Machine Learning, BI Data Modeling, and Econometric Risk Analytics.
          <span className="blinking-cursor"></span>
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>Explore Projects ⚡</span>
          </a>
          <a href="#experience" className="btn btn-glass">
            <span>View Experience ➔</span>
          </a>
        </div>

        {/* Social / Contact Badges */}
        <div className="social-pills-row">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-pill">
            <Github size={13} />
            <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill">
            <Linkedin size={13} />
            <span>LinkedIn</span>
          </a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="social-pill">
            <BookOpen size={13} />
            <span>Medium</span>
          </a>
          <a href={`mailto:${profile.email}`} className="social-pill">
            <Mail size={13} />
            <span>Email</span>
          </a>
          <div className="social-pill" style={{ cursor: 'default' }}>
            <MapPin size={13} />
            <span>{profile.location}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
