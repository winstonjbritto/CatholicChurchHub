import { ArrowRight, BookOpen } from "lucide-react";
import FaithCard from "@/components/churches/FaithCard";
import { faithResources } from "@/data/faithResources";

export default function FaithSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Resources
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 gradient-text-secondary">
            Learn About the Catholic Faith
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the rich history, traditions, and teachings of the Catholic Church.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {faithResources.map((resource) => (
              <FaithCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-primary/10">
            <BookOpen className="w-4 h-4" />
            Explore more faith resources
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
