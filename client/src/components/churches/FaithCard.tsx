import { Card, CardContent } from "@/components/ui/card";
import { FaithResource } from "@/types";

interface FaithCardProps {
  resource: FaithResource;
}

export default function FaithCard({ resource }: FaithCardProps) {
  const { title, description, imageUrl, link } = resource;
  
  return (
    <Card className="rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition group">
      <div className="relative h-52">
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-neutral-600 mb-4">{description}</p>
        <a href={link} className="text-primary hover:text-primary-dark font-medium flex items-center">
          Read more 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
}
