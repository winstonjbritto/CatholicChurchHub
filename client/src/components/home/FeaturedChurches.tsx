import { Link } from "wouter";
import { ArrowRight, Building } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ChurchCard from "@/components/churches/ChurchCard";
import { Church } from "@/types";

interface FeaturedChurchesProps {
  churches: Church[];
  isLoading: boolean;
}

export default function FeaturedChurches({ churches, isLoading }: FeaturedChurchesProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 gradient-text-primary">
              Featured Churches
            </h2>
            <p className="text-muted-foreground">Discover beautiful and historic churches in your area</p>
          </div>
          <Link href="/churches">
            <a className="text-primary font-medium flex items-center group rounded-full px-4 py-2 hover:bg-primary/5 transition-colors">
              View all <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm bg-white/80 backdrop-blur-sm border border-white/20">
                <Skeleton className="w-full h-48" />
                <div className="p-5">
                  <div className="flex justify-between mb-3">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-6 w-12" />
                  </div>
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-2/3 mb-3" />
                  <div className="pt-3 mt-3">
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Skeleton className="h-8 w-20 rounded-full" />
                      <Skeleton className="h-8 w-20 rounded-full" />
                      <Skeleton className="h-8 w-20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : churches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {churches.slice(0, 3).map((church) => (
              <ChurchCard key={church.id} church={church} />
            ))}
          </div>
        ) : (
          <div className="glass-card text-center py-10 rounded-2xl">
            <Building className="h-12 w-12 mx-auto mb-4 text-primary opacity-70" />
            <h3 className="font-heading text-xl font-bold mb-2">No Featured Churches</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              There are no featured churches available at the moment.
            </p>
            <Link href="/churches">
              <a className="text-primary px-6 py-2 rounded-full border border-primary/30 hover:bg-primary/5 transition-colors inline-flex items-center">
                Browse all churches
                <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
