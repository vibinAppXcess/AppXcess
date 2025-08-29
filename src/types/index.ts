// Common types used across the application

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
