import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format time from 24-hour format (HH:MM) to 12-hour format with AM/PM
export function formatTime(time: string): string {
  if (!time) return '';
  
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  
  if (hour === 0) {
    return `12:${minutes} AM`;
  } else if (hour < 12) {
    return `${hour}:${minutes} AM`;
  } else if (hour === 12) {
    return `12:${minutes} PM`;
  } else {
    return `${hour - 12}:${minutes} PM`;
  }
}

// Get day name from day of week number (0-6)
export function getDayName(dayOfWeek: number, short: boolean = false): string {
  const days = [
    { short: 'Sun', long: 'Sunday' },
    { short: 'Mon', long: 'Monday' },
    { short: 'Tue', long: 'Tuesday' },
    { short: 'Wed', long: 'Wednesday' },
    { short: 'Thu', long: 'Thursday' },
    { short: 'Fri', long: 'Friday' },
    { short: 'Sat', long: 'Saturday' }
  ];
  
  return short ? days[dayOfWeek].short : days[dayOfWeek].long;
}

// Get today's day of week (0-6)
export function getTodayDayOfWeek(): number {
  return new Date().getDay();
}

// Check if a time is in the past for today
export function isTimePassed(time: string): boolean {
  const now = new Date();
  const [hours, minutes] = time.split(':').map(Number);
  
  const timeDate = new Date();
  timeDate.setHours(hours, minutes, 0, 0);
  
  return now > timeDate;
}

// Get current date in YYYY-MM-DD format
export function getCurrentDate(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

// Format date from YYYY-MM-DD to human-readable format
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Extract city and state from address
export function extractLocationFromAddress(address: string): { city: string; state: string } {
  // Basic extraction - assumes address format includes city and state at the end
  const parts = address.split(',');
  if (parts.length >= 2) {
    const stateZip = parts[parts.length - 1].trim().split(' ');
    const state = stateZip[0];
    const city = parts[parts.length - 2].trim();
    return { city, state };
  }
  return { city: '', state: '' };
}
