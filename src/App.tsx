import { useState } from 'react'
import { PROFILE_DATA } from './data/profile'
import { PILLARS_DATA } from './data/skills'
import { CERTIFICATIONS_DATA } from './data/certifications'
import { PROJECTS_DATA } from './data/projects'
import { EXPERIENCE_DATA } from './data/experience'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhyMe } from './components/WhyMe'
import { CertificationsGrid } from './components/CertificationsGrid'
import { ProjectsCarousel } from './components/ProjectsCarousel'
import { ExperienceSection } from './components/ExperienceSection'
import { ContactSection } from './components/ContactSection'

import { ProjectModal } from './components/ProjectModal'
import { SkillModal } from './components/SkillModal'
import { ExperienceModal } from './components/ExperienceModal'
import { ImageLightbox } from './components/ImageLightbox'

import { Project, Experience, Certification } from './types'

export function App() {
  const [activeTab, setActiveTab] = useState<'skills' | 'certs'>('skills')
  
  // Selected Modals State
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; projectIds: string[] } | null>(null)
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Copy Email Toast State
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleCertClick = (cert: Certification) => {
    if (cert.openImageOnly) {
      setLightboxImage(cert.image)
    } else if (cert.pdfUrl) {
      window.open(cert.pdfUrl, '_blank')
    } else {
      setLightboxImage(cert.image)
    }
  }

  const matchedProjectsForSkill = selectedSkill
    ? PROJECTS_DATA.filter(p => selectedSkill.projectIds.includes(p.id))
    : []

  return (
    <div>
      {/* Background Ambience & Grid */}
      <div className="grid-overlay"></div>
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      {/* Floating Navigation */}
      <Navbar resumeUrl={PROFILE_DATA.resumePath} />

      <main className="container">
        {/* Section 1: Hero */}
        <Hero profile={PROFILE_DATA} />

        {/* Section 2: Why Me (Pillars & Certifications) */}
        <WhyMe
          pillars={PILLARS_DATA}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onSkillClick={(name, projectIds) => setSelectedSkill({ name, projectIds })}
        />

        {activeTab === 'certs' && (
          <div style={{ marginTop: '2rem' }}>
            <CertificationsGrid
              certifications={CERTIFICATIONS_DATA}
              onCertClick={handleCertClick}
            />
          </div>
        )}

        {/* Section 3: Featured Projects Carousel */}
        <ProjectsCarousel
          projects={PROJECTS_DATA}
          onProjectClick={setSelectedProject}
        />

        {/* Section 4: Experience & Leadership */}
        <ExperienceSection
          experiences={EXPERIENCE_DATA}
          onExperienceClick={setSelectedExp}
        />

        {/* Section 5: Contact & Inquiries */}
        <ContactSection
          email={PROFILE_DATA.email}
          onCopyEmail={handleCopyEmail}
          copied={copied}
        />
      </main>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onImageClick={setLightboxImage}
      />

      <SkillModal
        skillName={selectedSkill?.name || null}
        matchedProjects={matchedProjectsForSkill}
        onClose={() => setSelectedSkill(null)}
        onSelectProject={(p) => {
          setSelectedSkill(null)
          setSelectedProject(p)
        }}
      />

      <ExperienceModal
        experience={selectedExp}
        onClose={() => setSelectedExp(null)}
        onImageClick={setLightboxImage}
      />

      <ImageLightbox
        imageSrc={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Toast Notice */}
      {copied && (
        <div className="toast-notice">
          <span>📋</span>
          <span>{PROFILE_DATA.email} copied to clipboard!</span>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="container">
          Alden Nabil Wibowo Effendy © 2026 • Optimized for Vercel Edge Hosting
        </div>
      </footer>
    </div>
  )
}
export default App
