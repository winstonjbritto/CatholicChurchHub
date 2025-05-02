import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useSearch } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import useChurches from "@/hooks/useChurches";
import ChurchSearch from "@/components/churches/ChurchSearch";
import ChurchCard from "@/components/churches/ChurchCard";
import { Button } from "@/components/ui/button";
import { UserLocation, Church } from "@/types";

interface ChurchListProps {
  currentLocation: UserLocation;
  currentLanguage: string;
}

export default function ChurchList({ currentLocation, currentLanguage }: ChurchListProps) {
  const [searchParams, setSearchParams] = useState<string>("");
  const [filteredChurches, setFilteredChurches] = useState<Church[]>([]);
  const { searchChurches } = useChurches();
  const { toast } = useToast();
  const [location] = useLocation();
  const search = useSearch();
  
  // Parse search params from URL
  useEffect(() => {
    const params = new URLSearchParams(search);
    const query = params.get("query") || "";
    const city = params.get("city") || "";
    const state = params.get("state") || "";
    const zipCode = params.get("zipCode") || "";
    
    let searchString = "";
    if (query) searchString = query;
    else if (city && state) searchString = `${city}, ${state}`;
    else if (zipCode) searchString = zipCode;
    
    if (searchString) {
      setSearchParams(searchString);
    } else {
      // Default to current location if no search params
      setSearchParams(`${currentLocation.city}, ${currentLocation.state}`);
    }
  }, [search, currentLocation.city, currentLocation.state]);
  
  // Fetch churches based on search parameters
  const { data: churches, isLoading, error } = useQuery({
    queryKey: ['/api/churches', searchParams],
    enabled: !!searchParams,
  });
  
  // Update filtered churches when data changes
  useEffect(() => {
    if (churches) {
      setFilteredChurches(churches);
    }
  }, [churches]);
  
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading churches",
        description: "We couldn't load the church list. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  
  const handleSearch = (query: string) => {
    searchChurches(query);
  };
  
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Find Catholic Churches
          </h1>
          <ChurchSearch 
            onSearch={handleSearch} 
            currentLocation={currentLocation} 
            className="max-w-3xl mx-auto"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="font-heading text-2xl font-bold">
            {isLoading ? "Searching churches..." : `Churches ${searchParams ? `for "${searchParams}"` : "in your area"}`}
          </h2>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-500">
              {filteredChurches.length} {filteredChurches.length === 1 ? "result" : "results"}
            </span>
            
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredChurches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChurches.map((church) => (
              <ChurchCard key={church.id} church={church} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center shadow">
            <h3 className="font-heading text-xl font-bold mb-2">No Churches Found</h3>
            <p className="text-neutral-600 mb-4">
              We couldn't find any churches matching your search criteria.
            </p>
            <Button onClick={() => handleSearch(`${currentLocation.city}, ${currentLocation.state}`)}>
              View Churches Near Me
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
