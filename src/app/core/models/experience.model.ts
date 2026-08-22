export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
}
