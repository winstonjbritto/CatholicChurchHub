import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon } = feature;
  
  return (
    <div className="p-6 hover-lift rounded-2xl glass-card group">
      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-3 transition-transform">
        <div dangerouslySetInnerHTML={{ __html: icon }} className="text-white" />
      </div>
      <h3 className="font-heading text-center text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}
