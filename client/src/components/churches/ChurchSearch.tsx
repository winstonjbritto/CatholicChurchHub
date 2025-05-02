import { useState, FormEvent, useRef } from "react";
import { Search } from "lucide-react";
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
  
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <div className="flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-500" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search by church name, saint, or city"
              className="w-full pl-10 pr-4 py-6 rounded-md border border-neutral-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-medium py-6 px-6 rounded-md">
            Find Churches
          </Button>
        </div>
      </form>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {quickFilters.map((filter) => (
          <Badge 
            key={filter}
            variant="outline"
            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 cursor-pointer"
            onClick={() => handleQuickFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
        {currentLocation && (
          <Badge 
            variant="outline"
            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 cursor-pointer"
            onClick={() => handleQuickFilter(`In ${currentLocation.city}`)}
          >
            In {currentLocation.city}
          </Badge>
        )}
      </div>
    </div>
  );
}
