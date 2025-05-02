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
    <section className="relative h-[600px] bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-5"></div>
      </div>
      
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1603826773570-bc92068a5201?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="Catholic church interior with stained glass windows" 
        />
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 gradient-text-primary">
            Find Your Spiritual Home
          </h1>
          <p className="font-body text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
            Connect with Catholic churches in your area. Discover mass times, events, and community activities.
          </p>
          
          <div className="glass-effect p-1 rounded-2xl mb-8 max-w-xl">
            <ChurchSearch 
              onSearch={onSearch}
              currentLocation={currentLocation}
              quickFilters={["Near me", "Today's masses", "Spanish masses", "Confession available"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
