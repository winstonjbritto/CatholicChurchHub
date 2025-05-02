import { useCallback } from "react";
import { useLocation } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ChurchSearchParams } from "@/types";

export default function useChurches() {
  const [location, setLocation] = useLocation();
  const queryClient = useQueryClient();

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
      // The API already handles filtering by today's masses
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
      const res = await apiRequest("GET", `/api/churches/${id}`);
      return await res.json();
    } catch (error) {
      console.error("Error fetching church:", error);
      throw error;
    }
  }, []);

  // Fetch masses for a specific church
  const getChurchMasses = useCallback(async (churchId: number, day?: number, date?: string) => {
    try {
      let url = `/api/churches/${churchId}/masses`;
      if (day !== undefined) {
        url += `?day=${day}`;
      } else if (date) {
        url += `?date=${date}`;
      }
      
      const res = await apiRequest("GET", url);
      return await res.json();
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
