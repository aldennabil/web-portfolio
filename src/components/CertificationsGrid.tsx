import React from 'react'
import { Certification } from '../types'
import { ExternalLink } from 'lucide-react'

interface CertificationsGridProps {
  certifications: Certification[];
  onCertClick: (cert: Certification) => void;
}

export const CertificationsGrid: React.FC<CertificationsGridProps> = ({
  certifications,
  onCertClick
}) => {
  return (
    <div className="certs-grid">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className={`cert-card ${cert.isFeatured ? 'featured' : ''}`}
          onClick={() => onCertClick(cert)}
        >
          <div className="cert-preview-box">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="cert-img" 
              loading="lazy"
            />
            {cert.isFeatured && cert.featuredBadge && (
              <span className="cert-ribbon">{cert.featuredBadge}</span>
            )}
          </div>

          <div className="cert-body">
            <span className="cert-year">{cert.year} • {cert.category}</span>
            <h4 className="cert-name">{cert.title}</h4>
            <span className="cert-org">{cert.issuer}</span>
            
            <span className="cert-hint">
              <span>{cert.openImageOnly ? 'View Credential Proof' : 'View Certificate'}</span>
              <ExternalLink size={12} />
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
