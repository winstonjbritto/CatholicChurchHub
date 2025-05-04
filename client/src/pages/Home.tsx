import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { UserLocation, Mass, Church, Location } from "@/types";
import useChurches from "@/hooks/useChurches";
import { getMassesToday, getAllLocations } from "@/services/dataService";
import { mockChurches } from "@/services/mockData";

import HeroSection from "@/components/home/HeroSection";
import FeaturedChurches from "@/components/home/FeaturedChurches";
import LocationsSection from "@/components/home/LocationsSection";
import FaithSection from "@/components/home/FaithSection";
import ChurchPreview from "@/components/home/ChurchPreview";
import FeaturesSection from "@/components/home/FeaturesSection";
import AppPromotion from "@/components/home/AppPromotion";

interface HomeProps {
  currentLocation: UserLocation;
  currentLanguage: string;
}

export default function Home({ currentLocation, currentLanguage }: HomeProps) {
  const { toast } = useToast();
  const { searchChurches } = useChurches();
  
  // State to manage data and loading states
  const [featuredChurches, setFeaturedChurches] = useState<Church[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Get today's masses
        const masses = await getMassesToday();
        
        // Create a map to associate churches with their masses
        const churchMap = new Map<number, Mass[]>();
        
        // Group masses by church ID
        masses.forEach(mass => {
          if (!churchMap.has(mass.churchId)) {
            churchMap.set(mass.churchId, []);
          }
          churchMap.get(mass.churchId)?.push(mass);
        });

        // Filter churches that have masses today
        const churchesWithMasses = mockChurches
          .filter((church: Church) => churchMap.has(church.id))
          .map((church: Church) => ({
            ...church,
            todayMasses: churchMap.get(church.id) || []
          }));

        setFeaturedChurches(churchesWithMasses);
        
        // Load locations
        const locationData = await getAllLocations();
        setLocations(locationData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // Show error toast if data fetch fails
    if (error) {
      toast({
        title: "Error loading data",
        description: "We couldn't load the information. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleSearch = (query: string) => {
    searchChurches(query);
  };

  return (
    <div className="min-h-screen">
      <HeroSection 
        onSearch={handleSearch} 
        currentLocation={currentLocation} 
        currentLanguage={currentLanguage}
      />
      
      <FeaturedChurches 
        churches={featuredChurches} 
        isLoading={isLoading} 
      />
      
      <LocationsSection locations={locations} />
      
      <FaithSection />
      
      <ChurchPreview />
      
      <FeaturesSection />
      
      <AppPromotion />
    </div>
  );
}
