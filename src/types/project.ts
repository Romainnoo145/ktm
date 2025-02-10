export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images: string[];
  features?: string[];
}

export type ProjectsData = Project[]; 