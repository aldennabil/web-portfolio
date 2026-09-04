export interface Profile {
  fullName: string;
  roleTitle: string;
  tagline: string;
  university: string;
  degree: string;
  gpa: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  medium: string;
  resumePath: string;
  avatarPath: string;
}

export interface SkillItem {
  id: string;
  name: string;
  projectIds: string[];
}

export interface CompetencyPillar {
  id: string;
  title: string;
  iconType: 'bulb' | 'robot' | 'percentage';
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Predictive ML' | 'BI & Analytics' | 'Financial Analytics' | 'Market Intelligence' | 'Decision Science & Risk' | 'Econometrics' | 'Statistical Research';
  period: string;
  award?: string;
  image?: string;
  formulaBadge?: string;
  summary: string;
  problem: string;
  methodology: string;
  results: string;
  tags: string[];
  githubUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
  gallery?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number;
  category: string;
  image: string;
  pdfUrl?: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  openImageOnly?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
  badgeText: string;
  badgeGradient: string;
  gallery?: string[];
}
