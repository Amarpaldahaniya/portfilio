export interface CaseStudy {
  overview: string;
  problem: string;
  challenge: string;
  solution: string;
  technology: string[];
  keyContributions: string[];
  architecture: string;
  outcome: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  iconName: string;
  category: 'Logistics' | 'Enterprise Tools' | 'API & Integrations' | 'Full Stack';
  caseStudy: CaseStudy;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}
