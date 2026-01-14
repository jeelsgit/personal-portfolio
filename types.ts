export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string; // FontAwesome class
}
