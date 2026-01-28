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

export interface Education {
  degree: string;
  school: string;
  location: string;
  graduatedDate: string;
  honors?: string;
  gpa?: string;
  description: string;
  keyAreas: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  skills: string[];
}

export interface Activity {
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string; // FontAwesome class
}
