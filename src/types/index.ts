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
  instagram?: string;
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

export interface ProjectArtifacts {
  paperUrl?: string;
  rReportUrl?: string;
  posterUrl?: string;
  slidesUrl?: string;
  notebookUrl?: string;
  datasetUrl?: string;
  extraUrls?: Array<{ label: string; url: string; icon?: string }>;
}

export interface Project {
  id: string;
  title: string;
  category: 'Predictive ML' | 'BI & Analytics' | 'Financial Analytics' | 'Market Intelligence' | 'Decision Science & Risk' | 'Econometrics' | 'Statistical Research' | 'Biostatistics';
  period: string;
  award?: string;
  image?: string;
  formulaBadge?: string;
  summary: string;
  summaryId?: string;
  problem: string;
  methodology: string;
  results: string;
  urgency?: string;
  dataScope?: string;
  tags: string[];
  githubUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
  gallery?: string[];
  artifacts?: ProjectArtifacts;
  portfolio?: ProjectEditorial;
}

export type Locale = 'en' | 'id';
export interface LocalizedText { en: string; id?: string }
export interface PublicClaim {
  statement: LocalizedText;
  status: 'verified' | 'estimated';
  publicUrl?: string;
}
export interface ProjectEditorial {
  spotlightOrder?: number;
  status: LocalizedText;
  summary: LocalizedText;
  contribution?: LocalizedText;
  teamContribution?: LocalizedText;
  problem?: LocalizedText;
  methodology?: LocalizedText;
  results?: LocalizedText;
  limitations?: LocalizedText;
  caption?: LocalizedText;
  image?: string;
  competencyIds: string[];
  claims?: PublicClaim[];
}
export interface Competency {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  projectIds: string[];
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
