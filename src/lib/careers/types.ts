export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  postedDate: string;
  isUrgent: boolean;
  shortDescription: string;
  description: string[];
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
  coverLetter?: string;
  portfolio?: string;
  source: string;
  message?: string;
  consent: boolean;
}