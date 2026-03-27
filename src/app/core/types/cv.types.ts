export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  bio: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  period: string;
}

export interface SkillCategory {
  name: 'frontend' | 'backend' | 'cms' | 'creative' | 'video' | 'languages';
  items: string[];
}

export interface Project {
  title: string;
  link: string;
  description: string;
  tech: string[];
  image: string;
}

export interface CVData {
  personal: PersonalInfo;
  socials: SocialLink[];
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
}
