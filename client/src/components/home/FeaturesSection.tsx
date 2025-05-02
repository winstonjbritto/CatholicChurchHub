import FeatureCard from "@/components/churches/FeatureCard";
import { features } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">
            Features to Enhance Your Spiritual Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover all the ways CatholicConnect can help you connect with your faith community.
          </p>
        </div>
        
        {/* Decorative element */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-1/3 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
