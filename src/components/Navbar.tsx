import React from 'react'
import { FileText } from 'lucide-react'

interface NavbarProps {
  resumeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ resumeUrl }) => {
  return (
    <div className="navbar-wrap">
      <nav className="navbar-container">
        <a href="#why-me" className="nav-link">Why Me?</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a 
          href={resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-cv-btn"
          title="Download ATS Resume PDF"
        >
          <FileText size={13} />
          <span>VIEW CV</span>
        </a>
      </nav>
    </div>
  )
}
