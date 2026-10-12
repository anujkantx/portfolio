export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  details?: string;
  logoSrc?: string;
}

export interface HeroConfig {
  characterImage: string;
  characterAlt?: string;
  displayTitle: string;
  editionRoman?: string;
  releaseTag?: string;
  metaTags?: string[];
  credits?: string[];
  storyBadge?: string;
  storyHeading?: string;
  storyText?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  availability: {
    status: "available" | "limited" | "busy";
    label: string;
    details: string;
  };
  headline: string;
  subheadline: string;
  bioSummary: string;
  email: string;
  phone?: string;
  socialLinks: SocialLink[];
  education: EducationItem[];
  resumeUrl?: string;
  hero?: HeroConfig;
}

export interface ProjectArchitecture {
  client: string[];
  server: string[];
  data: string[];
  infrastructure: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  category: "Full-Stack & Systems" | "AI & Computer Vision" | "SaaS & Education" | "Tooling";
  year: string;
  featured: boolean;
  status: "In Active Development" | "Prototype / Hackathon" | "Architecture Validated" | "Concept Stage";
  githubUrl?: string;
  liveUrl?: string;
  demoNote?: string;
  techStack: string[];
  summary: string;
  problem: string;
  solution: string;
  ownerRole: string;
  architecture: ProjectArchitecture;
  engineeringChallenges: string[];
  tradeOffs: string[];
  currentStatusDetails: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
    level: "Core" | "Proficient" | "Exploring";
  }[];
}

export interface CreativeProject {
  id: string;
  title: string;
  medium: string;
  role: string;
  year: string;
  description: string;
  themes: string[];
  aspectRatio?: string;
  link?: string;
  statusText?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  type: "Education & Research" | "Independent Engineering" | "Hackathon & Community";
  highlights: string[];
}
