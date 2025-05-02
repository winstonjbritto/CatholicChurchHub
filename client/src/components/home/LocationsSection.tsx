import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import LocationCard from "@/components/churches/LocationCard";
import { Location } from "@/types";

interface LocationsSectionProps {
  locations: Location[];
}

export default function LocationsSection({ locations }: LocationsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-3 h-3 inline-block mr-1" /> Locations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">
            Find Churches Near You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover Catholic churches in popular locations throughout the country
          </p>
        </div>
        
        {locations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.slice(0, 4).map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-52 w-full rounded-2xl" />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="bg-white hover:bg-primary/5 text-primary border border-primary/20 rounded-full px-6 py-6 h-auto shadow-sm font-medium"
          >
            <Link href="/churches" className="flex items-center">
              Browse All Locations
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
