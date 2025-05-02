import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { UserLocation } from "@/types";
import useChurches from "@/hooks/useChurches";

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

  // Fetch featured churches (today's masses)
  const { data: featuredChurches, error, isLoading } = useQuery({
    queryKey: ['/api/masses/today'],
    staleTime: 1000 * 60 * 15, // 15 minutes
  });

  // Fetch locations for the "Find Churches Near You" section
  const { data: locations } = useQuery({
    queryKey: ['/api/locations'],
  });

  useEffect(() => {
    // Show error toast if featured churches fetch fails
    if (error) {
      toast({
        title: "Error loading churches",
        description: "We couldn't load the featured churches. Please try again later.",
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
        churches={featuredChurches || []} 
        isLoading={isLoading} 
      />
      
      <LocationsSection locations={locations || []} />
      
      <FaithSection />
      
      <ChurchPreview />
      
      <FeaturesSection />
      
      <AppPromotion />
    </div>
  );
}
