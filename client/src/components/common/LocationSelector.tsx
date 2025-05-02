import { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPinIcon, Search } from "lucide-react";
import { UserLocation } from "@/types";

// Popular locations
const POPULAR_LOCATIONS: UserLocation[] = [
  { city: "New York", state: "NY", displayName: "New York, NY" },
  { city: "Los Angeles", state: "CA", displayName: "Los Angeles, CA" },
  { city: "Chicago", state: "IL", displayName: "Chicago, IL" },
  { city: "Boston", state: "MA", displayName: "Boston, MA" },
  { city: "Miami", state: "FL", displayName: "Miami, FL" },
  { city: "San Francisco", state: "CA", displayName: "San Francisco, CA" },
  { city: "Washington", state: "DC", displayName: "Washington, DC" },
  { city: "Philadelphia", state: "PA", displayName: "Philadelphia, PA" }
];

interface LocationSelectorProps {
  currentLocation: UserLocation;
  onLocationChange: (location: UserLocation) => void;
}

export default function LocationSelector({ 
  currentLocation, 
  onLocationChange 
}: LocationSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Filter locations based on search query
  const filteredLocations = POPULAR_LOCATIONS.filter(
    location => location.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSelectLocation = (location: UserLocation) => {
    onLocationChange(location);
    setIsDialogOpen(false);
  };
  
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center text-sm font-medium text-neutral-700 hover:text-primary"
        >
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{currentLocation.displayName}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Location</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="Search by city or state"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <Button
                  key={location.displayName}
                  variant="ghost"
                  className="w-full justify-start text-left"
                  onClick={() => handleSelectLocation(location)}
                >
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  {location.displayName}
                </Button>
              ))
            ) : (
              <p className="text-center text-neutral-500 py-4">No locations found</p>
            )}
          </div>
          
          <div className="pt-2 border-t">
            <p className="text-sm text-neutral-500 mb-2">Popular Locations</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_LOCATIONS.slice(0, 4).map((location) => (
                <Button
                  key={location.displayName}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSelectLocation(location)}
                >
                  {location.city}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
