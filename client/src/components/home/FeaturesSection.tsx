import FeatureCard from "@/components/churches/FeatureCard";
import { features } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-neutral-800 mb-3">
            Features to Enhance Your Spiritual Journey
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover all the ways CatholicConnect can help you connect with your faith community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
