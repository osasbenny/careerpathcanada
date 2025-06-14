export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  province: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  category: string;
  salary?: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  postedDate: string;
  applicationUrl?: string;
  applicationEmail?: string;
  companyLogo?: string;
  featured: boolean;
  remote: boolean;
  source: 'manual' | 'adzuna' | 'jooble' | 'remotive' | 'careerjet';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  jobCount: number;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  category: string;
  readTime: number;
  image: string;
}

export interface FilterOptions {
  keyword?: string;
  location?: string;
  province?: string;
  category?: string;
  type?: string;
  remote?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'employer' | 'admin';
  company?: string;
  verified: boolean;
}