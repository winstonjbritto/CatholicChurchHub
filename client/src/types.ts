// This file contains TypeScript interfaces used throughout the application

// Church information
export interface Church {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: string;
  longitude?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  yearEstablished?: number;
  imageUrl?: string;
  isHistoric?: boolean;
  hasConfession?: boolean;
  confessionHours?: string;
  rating?: string;
  todayMasses?: Mass[]; // Used when fetching churches with today's masses
}

// Mass information
export interface Mass {
  id: number;
  churchId: number;
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  time: string; // HH:MM format
  language: string;
  isSpecial?: boolean;
  priestName?: string;
  description?: string;
  date?: string; // For special masses on specific dates (YYYY-MM-DD)
}

// Location information
export interface Location {
  id: number;
  name: string;
  state?: string;
  imageUrl?: string;
  churchCount?: number;
}

// Language information
export interface Language {
  id: number;
  name: string;
  code: string;
}

// For church search
export interface ChurchSearchParams {
  query?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

// For location selector
export interface UserLocation {
  city: string;
  state: string;
  displayName: string;
}

// For faith learning cards
export interface FaithResource {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// For feature cards
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
