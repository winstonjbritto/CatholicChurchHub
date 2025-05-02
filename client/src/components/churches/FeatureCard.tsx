import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon } = feature;
  
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}
