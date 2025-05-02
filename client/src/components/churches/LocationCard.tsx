import { Link } from "wouter";
import { Location } from "@/types";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const { name, state, imageUrl, churchCount } = location;
  
  return (
    <Link href={`/churches?city=${name}&state=${state}`}>
      <a className="block group">
        <div className="relative rounded-lg overflow-hidden h-48 shadow-md">
          <img 
            src={imageUrl || "https://images.unsplash.com/photo-1502104034360-73176bb1e92e"} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            alt={name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <p className="text-white text-sm opacity-90">{churchCount || 0} churches</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
