export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  badgeText: string;
  iconName: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}
