import { 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Bone, 
  Ear, 
  User, 
  Microscope, 
  Activity, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  Syringe, 
  Scan, 
  Zap,
  Users
} from 'lucide-react';
import { Department, Doctor, Feature, Service, Testimonial } from './types';

export const DEPARTMENTS: Department[] = [
  { id: '1', title: 'General Medicine', description: 'Comprehensive healthcare for all ages with a focus on preventative care.', icon: Stethoscope },
  { id: '2', title: 'Dermatology', description: 'Advanced skin care treatments, cosmetic procedures, and diagnostics.', icon: User },
  { id: '3', title: 'Pediatrics', description: 'Compassionate care for infants, children, and adolescents.', icon: Baby },
  { id: '4', title: 'Orthopedics', description: 'Expert diagnosis and treatment for bone, joint, and muscle conditions.', icon: Bone },
  { id: '5', title: 'ENT', description: 'Specialized care for Ear, Nose, and Throat disorders.', icon: Ear },
  { id: '6', title: 'Cardiology', description: 'State-of-the-art heart care and cardiovascular surgeries.', icon: HeartPulse },
];

export const DOCTORS: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Chief Cardiologist', experience: '15+ Years', imageUrl: 'https://picsum.photos/seed/doc1/400/400' },
  { id: '2', name: 'Dr. James Smith', specialization: 'Senior Neurologist', experience: '12+ Years', imageUrl: 'https://picsum.photos/seed/doc2/400/400' },
  { id: '3', name: 'Dr. Emily Davis', specialization: 'Head Pediatrician', experience: '10+ Years', imageUrl: 'https://picsum.photos/seed/doc3/400/400' },
  { id: '4', name: 'Dr. Michael Chen', specialization: 'Orthopedic Surgeon', experience: '18+ Years', imageUrl: 'https://picsum.photos/seed/doc4/400/400' },
  { id: '5', name: 'Dr. Linda Wilson', specialization: 'Dermatologist', experience: '8+ Years', imageUrl: 'https://picsum.photos/seed/doc5/400/400' },
  { id: '6', name: 'Dr. Robert Taylor', specialization: 'General Physician', experience: '20+ Years', imageUrl: 'https://picsum.photos/seed/doc6/400/400' },
];

export const FEATURES: Feature[] = [
  { id: '1', title: 'Expert Doctors', description: 'World-class specialists.', icon: Users },
  { id: '2', title: 'Advanced Tech', description: 'Latest diagnostic equipment.', icon: Microscope },
  { id: '3', title: '24/7 Support', description: 'Emergency care round the clock.', icon: Clock },
  { id: '4', title: 'Precise Results', description: 'Accurate lab diagnostics.', icon: Activity },
  { id: '5', title: 'Cashless Support', description: 'Major insurance accepted.', icon: ShieldCheck },
  { id: '6', title: 'Digital Booking', description: 'Easy app-based appointments.', icon: Smartphone },
];

export const SERVICES: Service[] = [
  { id: '1', title: 'Health Checkups', description: 'Full body checkups for early detection.', icon: Activity },
  { id: '2', title: 'Skin & Hair', description: 'Laser treatments and aesthetic care.', icon: User },
  { id: '3', title: 'Vaccinations', description: 'Immunization programs for children.', icon: Syringe },
  { id: '4', title: 'Digital X-Ray', description: 'Low radiation high-res imaging.', icon: Scan },
  { id: '5', title: 'Ultrasound / MRI', description: 'Advanced internal imaging.', icon: Zap },
  { id: '6', title: 'Physiotherapy', description: 'Rehabilitation and pain management.', icon: Bone },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Alice Brown', role: 'Patient', comment: 'The facility is world-class and the staff is incredibly kind. I felt safe and cared for.', rating: 5, imageUrl: 'https://picsum.photos/seed/patient1/100/100' },
  { id: '2', name: 'Mark Wilson', role: 'Patient', comment: 'Quick diagnosis and effective treatment. Dr. Johnson is a lifesaver!', rating: 5, imageUrl: 'https://picsum.photos/seed/patient2/100/100' },
  { id: '3', name: 'Sophie Lee', role: 'Patient', comment: 'Beautiful clinic, doesn’t feel like a hospital at all. Very modern.', rating: 4, imageUrl: 'https://picsum.photos/seed/patient3/100/100' },
];