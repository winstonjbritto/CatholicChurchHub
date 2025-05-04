import { Church, Location, Mass, Language } from '@/types';
import {
  mockLocations,
  mockChurches,
  getTodaysMasses,
  getMassesByChurch,
  getMassesByChurchAndDay,
  searchChurches,
  getChurchesByLocation,
  getChurchById,
  mockLanguages
} from './mockData';

// Simulates API response delay for a more realistic experience
const simulateDelay = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300); // 300ms delay to simulate network request
  });
};

// Location API
export const getAllLocations = (): Promise<Location[]> => {
  return simulateDelay(mockLocations);
};

// Church API
export const getAllChurches = (): Promise<Church[]> => {
  return simulateDelay(mockChurches);
};

export const getChurch = (id: number): Promise<Church | undefined> => {
  return simulateDelay(getChurchById(id));
};

export const searchChurchesApi = (query: string): Promise<Church[]> => {
  return simulateDelay(searchChurches(query));
};

export const getChurchesInLocation = (city: string, state: string): Promise<Church[]> => {
  return simulateDelay(getChurchesByLocation(city, state));
};

// Mass API
export const getMassesToday = (): Promise<Mass[]> => {
  return simulateDelay(getTodaysMasses());
};

export const getMassesForChurch = (churchId: number): Promise<Mass[]> => {
  return simulateDelay(getMassesByChurch(churchId));
};

export const getMassesForChurchOnDay = (churchId: number, dayOfWeek: number): Promise<Mass[]> => {
  return simulateDelay(getMassesByChurchAndDay(churchId, dayOfWeek));
};

// Language API
export const getAllLanguages = (): Promise<Language[]> => {
  return simulateDelay(mockLanguages);
};