import { Linkedin, Instagram, Github, Mail, MapPin } from 'lucide-react'
import { PROFILE_DATA } from '../data/profile'

export function ProfileSocials() {
  const profile = PROFILE_DATA
  const links = [
    { name: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
    { name: 'Instagram', href: profile.instagram, Icon: Instagram },
    { name: 'GitHub', href: profile.github, Icon: Github },
    { name: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
  ]
  return <div className="profile-socials">
    <div className="social-card-grid">{links.map(({ name, href, Icon }) => href && <a className="social-card" key={name} href={href} {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}><Icon size={14} aria-hidden="true" /><span>{name}</span><span aria-hidden="true">↗</span></a>)}</div>
    <p className="profile-location"><MapPin size={13} aria-hidden="true" />{profile.location}</p>
  </div>
}
