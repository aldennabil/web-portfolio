import React, { useRef } from 'react'
import { Project } from '../types'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects,
  onProjectClick
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    if (trackRef.current) {
      const scrollAmount = 380 * direction;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="carousel-header">
        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.25rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Slide through the complete catalog ordered by methodological depth and quantitative impact. Click any card for full case study.
          </p>
        </div>
        
        <div className="carousel-nav-btns">
          <button 
            className="carousel-nav-btn" 
            onClick={() => handleScroll(-1)} 
            title="Previous Projects"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="carousel-nav-btn" 
            onClick={() => handleScroll(1)} 
            title="Next Projects"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="projects-scroll-track" ref={trackRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => onProjectClick(project)}
          >
            <div className="project-thumb-box">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-thumb-img" 
                  loading="lazy"
                />
              ) : (
                <div className="formula-fallback">
                  <span className="formula-math">{project.formulaBadge || 'f(x) ~ Model'}</span>
                  <span className="formula-domain">{project.award || project.category.toUpperCase()}</span>
                </div>
              )}
            </div>

            <div className="project-card-body">
              <div className="project-tag-strip">
                <span className="project-cat-badge">{project.category}</span>
                <span style={{ color: 'var(--text-muted)' }}>{project.period}</span>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.summary}</p>

              <div className="project-tech-row">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
