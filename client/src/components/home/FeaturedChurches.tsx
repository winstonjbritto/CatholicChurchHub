import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ChurchCard from "@/components/churches/ChurchCard";
import { Church } from "@/types";

interface FeaturedChurchesProps {
  churches: Church[];
  isLoading: boolean;
}

export default function FeaturedChurches({ churches, isLoading }: FeaturedChurchesProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-heading text-3xl font-bold text-neutral-800">Featured Churches</h2>
          <Link href="/churches">
            <a className="text-primary hover:text-primary-dark font-medium flex items-center">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-card bg-white">
                <Skeleton className="w-full h-48" />
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-6 w-12" />
                  </div>
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-2/3 mb-3" />
                  <div className="border-t border-neutral-200 pt-3 mt-3">
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Skeleton className="h-8 w-16 rounded" />
                      <Skeleton className="h-8 w-16 rounded" />
                      <Skeleton className="h-8 w-16 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : churches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churches.slice(0, 3).map((church) => (
              <ChurchCard key={church.id} church={church} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 rounded-lg border border-dashed border-neutral-300 bg-neutral-50">
            <h3 className="font-heading text-xl font-bold mb-2">No Featured Churches</h3>
            <p className="text-neutral-600 mb-4">There are no featured churches available at the moment.</p>
            <Link href="/churches">
              <a className="text-primary hover:text-primary-dark font-medium">
                Browse all churches
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
