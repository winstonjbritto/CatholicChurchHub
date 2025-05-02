import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import LocationCard from "@/components/churches/LocationCard";
import { Location } from "@/types";

interface LocationsSectionProps {
  locations: Location[];
}

export default function LocationsSection({ locations }: LocationsSectionProps) {
  return (
    <section className="py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-neutral-800 text-center mb-8">
          Find Churches Near You
        </h2>
        
        {locations.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.slice(0, 4).map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-lg" />
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="bg-white hover:bg-neutral-100 text-primary border border-primary">
            <Link href="/churches">Browse All Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
