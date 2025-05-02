import { Search } from "lucide-react";
import ChurchSearch from "@/components/churches/ChurchSearch";
import { UserLocation } from "@/types";

interface HeroSectionProps {
  onSearch: (query: string) => void;
  currentLocation: UserLocation;
  currentLanguage: string;
}

export default function HeroSection({ onSearch, currentLocation, currentLanguage }: HeroSectionProps) {
  return (
    <section className="relative h-[500px] bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603826773570-bc92068a5201?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="Catholic church interior with stained glass windows" 
        />
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Find Your Spiritual Home</h1>
          <p className="font-body text-lg md:text-xl mb-8">
            Connect with Catholic churches in your area. Discover mass times, events, and community activities.
          </p>
          
          <ChurchSearch 
            onSearch={onSearch}
            currentLocation={currentLocation}
            quickFilters={["Near me", "Today's masses", "Spanish masses", "Confession available"]}
          />
        </div>
      </div>
    </section>
  );
}
