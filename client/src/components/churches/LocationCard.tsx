import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { Location } from "@/types";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const { name, state, imageUrl, churchCount } = location;
  
  return (
    <Link href={`/churches?city=${name}&state=${state}`}>
      <a className="block group">
        <div className="relative rounded-2xl overflow-hidden h-52 shadow-md hover-lift">
          <img 
            src={imageUrl || "https://images.unsplash.com/photo-1502104034360-73176bb1e92e"} 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
            alt={name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          {/* Decorative element */}
          <div className="absolute top-4 left-4 glass-effect rounded-full p-2">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-heading font-bold text-xl mb-1">{name}</h3>
                <div className="flex items-center">
                  <p className="text-white/90 text-sm">{state}</p>
                  <span className="mx-2 text-white/50">•</span>
                  <p className="text-white/90 text-sm">{churchCount || 0} churches</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
