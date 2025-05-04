import { useCallback } from "react";
import { useLocation } from "wouter";
import { ChurchSearchParams } from "@/types";
import { getChurch as getChurchService, getMassesForChurch, getMassesForChurchOnDay } from "@/services/dataService";

export default function useChurches() {
  const [location, setLocation] = useLocation();

  // Navigate to the churches page with search parameters
  const searchChurches = useCallback((searchQuery: string) => {
    // Parse search query to detect different formats
    const params: ChurchSearchParams = {};
    
    // Check if it's a "Near me" or similar quick filter
    if (searchQuery === "Near me") {
      // This will use browser geolocation in a more complete implementation
      setLocation("/churches");
      return;
    }
    
    // Check if it's "Today's masses"
    if (searchQuery === "Today's masses" || searchQuery.toLowerCase().includes("today")) {
      setLocation("/churches?query=today");
      return;
    }
    
    // Check if it's a language filter
    if (searchQuery.toLowerCase().includes("masses")) {
      const language = searchQuery.split(" ")[0];
      setLocation(`/churches?query=${language}`);
      return;
    }
    
    // Check if it's "Confession available"
    if (searchQuery === "Confession available" || searchQuery.toLowerCase().includes("confession")) {
      setLocation("/churches?query=confession");
      return;
    }
    
    // Check if it's a location in format "In [City]"
    if (searchQuery.startsWith("In ")) {
      const city = searchQuery.substring(3);
      setLocation(`/churches?city=${city}`);
      return;
    }
    
    // Check if it's a city, state format (e.g., "New York, NY")
    const cityStateMatch = searchQuery.match(/^([^,]+),\s*([A-Z]{2})$/);
    if (cityStateMatch) {
      const [, city, state] = cityStateMatch;
      setLocation(`/churches?city=${encodeURIComponent(city)}&state=${state}`);
      return;
    }
    
    // Check if it's a ZIP code (5 digits)
    if (/^\d{5}$/.test(searchQuery)) {
      setLocation(`/churches?zipCode=${searchQuery}`);
      return;
    }
    
    // Default to a general search query
    setLocation(`/churches?query=${encodeURIComponent(searchQuery)}`);
  }, [setLocation]);

  // Fetch a specific church by ID
  const getChurch = useCallback(async (id: number) => {
    try {
      return await getChurchService(id);
    } catch (error) {
      console.error("Error fetching church:", error);
      throw error;
    }
  }, []);

  // Fetch masses for a specific church
  const getChurchMasses = useCallback(async (churchId: number, day?: number, date?: string) => {
    try {
      if (day !== undefined) {
        return await getMassesForChurchOnDay(churchId, day);
      } else {
        // For now, if date is provided, we'll just get all masses - in a real app you'd filter by date
        return await getMassesForChurch(churchId);
      }
    } catch (error) {
      console.error("Error fetching masses:", error);
      throw error;
    }
  }, []);

  return {
    searchChurches,
    getChurch,
    getChurchMasses
  };
}
