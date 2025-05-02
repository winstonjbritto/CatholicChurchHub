import { useState, FormEvent, useRef } from "react";
import { Search, MapPin, Calendar, Globe, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserLocation } from "@/types";

interface ChurchSearchProps {
  onSearch: (query: string) => void;
  currentLocation?: UserLocation;
  quickFilters?: string[];
  className?: string;
}

export default function ChurchSearch({ 
  onSearch, 
  currentLocation,
  quickFilters = ["Near me", "Today's masses", "Spanish masses", "Confession available"],
  className 
}: ChurchSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  
  const handleQuickFilter = (filter: string) => {
    setSearchQuery(filter);
    onSearch(filter);
    // Focus back on input for accessibility
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  // Function to get the appropriate icon for each filter
  const getFilterIcon = (filter: string) => {
    if (filter.toLowerCase().includes('near') || filter.toLowerCase().includes('in ')) {
      return <MapPin className="w-3 h-3 mr-1" />;
    } else if (filter.toLowerCase().includes('masses') || filter.toLowerCase().includes('today')) {
      return <Calendar className="w-3 h-3 mr-1" />;
    } else if (filter.toLowerCase().includes('spanish') || filter.toLowerCase().includes('language')) {
      return <Globe className="w-3 h-3 mr-1" />;
    } else if (filter.toLowerCase().includes('confession')) {
      return <Cross className="w-3 h-3 mr-1" />;
    }
    return null;
  };
  
  return (
    <div className={`bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <div className="flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search by church name, saint, or city"
              className="w-full pl-10 pr-4 py-6 rounded-xl focus:ring-2 focus:ring-primary/50 border-none shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <Button 
            type="submit" 
            className="w-full md:w-auto text-white font-medium py-6 px-6 rounded-xl shadow-md"
          >
            <Search className="w-4 h-4 mr-2" />
            Find Churches
          </Button>
        </div>
      </form>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {quickFilters.map((filter) => (
          <Badge 
            key={filter}
            variant="outline"
            className="bg-white hover:bg-primary/5 text-foreground hover:text-primary border border-border/50 cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center"
            onClick={() => handleQuickFilter(filter)}
          >
            {getFilterIcon(filter)}
            {filter}
          </Badge>
        ))}
        {currentLocation && (
          <Badge 
            variant="outline"
            className="bg-white hover:bg-primary/5 text-foreground hover:text-primary border border-border/50 cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center"
            onClick={() => handleQuickFilter(`In ${currentLocation.city}`)}
          >
            <MapPin className="w-3 h-3 mr-1" />
            In {currentLocation.city}
          </Badge>
        )}
      </div>
    </div>
  );
}
