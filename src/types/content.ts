// ──────────────────────────────────────────────
// Shared TypeScript interfaces for AIMS Healthcare College
// ──────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: { day: string; time: string }[];
  copyright: string;
}

export interface ProgramSchedule {
  format: string;
  icon: string;
  time: string;
  duration: string;
  theoryHours: number;
  practicumHours: number;
}

export interface ProgramInfo {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  image: string;
  deliveryFormat: string;
  schedules: ProgramSchedule[];
}

export interface AdmissionRequirement {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CommunityService {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export interface PolicyDocument {
  slug: string;
  title: string;
  description: string;
  pdfPath: string;
}
