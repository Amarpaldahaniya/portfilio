export interface Skill {
  name: string;
  category: string;
  iconName?: string;
  isPrimary?: boolean;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  iconName: string;
  skills: Skill[];
}
