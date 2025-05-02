import { ArrowRight } from "lucide-react";
import FaithCard from "@/components/churches/FaithCard";
import { faithResources } from "@/data/faithResources";

export default function FaithSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-neutral-800 mb-3">
            Learn About the Catholic Faith
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore the rich history, traditions, and teachings of the Catholic Church.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faithResources.map((resource) => (
            <FaithCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
