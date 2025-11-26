import { LucideIcon } from 'lucide-react';

export interface Department {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  imageUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}