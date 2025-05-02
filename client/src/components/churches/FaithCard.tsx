import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { FaithResource } from "@/types";

interface FaithCardProps {
  resource: FaithResource;
}

export default function FaithCard({ resource }: FaithCardProps) {
  const { title, description, imageUrl, link } = resource;
  
  return (
    <Card className="rounded-2xl overflow-hidden hover-lift backdrop-blur-sm border border-white/20 group">
      <div className="relative h-56">
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="glass-effect rounded-full p-2">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-heading font-bold text-xl">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-5 text-sm">{description}</p>
        <a 
          href={link} 
          className="text-primary font-medium text-sm flex items-center group-hover:underline"
        >
          Read more 
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </CardContent>
    </Card>
  );
}
