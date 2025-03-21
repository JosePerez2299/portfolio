export interface Skill {
  name: string;
  icon: string;
  level?: number;
  category?: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}
