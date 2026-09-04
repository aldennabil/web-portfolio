import React from 'react'
import { Rocket, Copy, Check } from 'lucide-react'

interface ContactSectionProps {
  email: string;
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  onCopyEmail,
  copied
}) => {
  return (
    <section id="contact" className="section-wrapper" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Open for Discussions, Collaborations &amp; Opportunities</h2>
      <p className="section-summary-pitch">
        From developing predictive ML pipelines and BI dashboards to exploring new ideas across economic and risk analytics, I love connecting with fellow builders, researchers, and forward-thinking teams. Let’s discuss how we can work together!
      </p>

      <div className="hero-actions">
        <a href={`mailto:${email}`} className="btn btn-primary">
          <span>Get In Touch</span>
          <Rocket size={16} />
        </a>
        
        <button onClick={onCopyEmail} className="btn btn-glass">
          {copied ? <Check size={16} color="#00f2fe" /> : <Copy size={16} />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy Email 📋'}</span>
        </button>
      </div>
    </section>
  )
}
