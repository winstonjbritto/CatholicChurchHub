import { Link } from "wouter";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatTime } from "@/lib/utils";
import { Church, Mass } from "@/types";

interface ChurchCardProps {
  church: Church;
  todayMasses?: Mass[];
}

export default function ChurchCard({ church, todayMasses }: ChurchCardProps) {
  const { id, name, city, state, imageUrl, rating } = church;
  
  const masses = todayMasses || church.todayMasses || [];
  
  return (
    <Card className="rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition bg-white">
      <div className="relative h-48">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1550340499-a6c60c554998"} 
          className="w-full h-full object-cover" 
          alt={name} 
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
          <Heart className="text-primary h-5 w-5" />
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between">
          <h3 className="font-heading text-xl font-bold">{name}</h3>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 text-sm font-medium">{rating || "4.5"}</span>
          </div>
        </div>
        
        <p className="text-neutral-600 mt-1 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-neutral-500 inline mr-1">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          {city}, {state}
        </p>
        
        <div className="border-t border-neutral-200 pt-3 mt-3">
          <p className="font-medium text-neutral-800">Today's Masses</p>
          {masses.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {masses.slice(0, 3).map((mass) => (
                <span 
                  key={mass.id}
                  className={`text-sm py-1 px-2 rounded ${
                    mass.isSpecial 
                      ? 'bg-primary bg-opacity-10 text-primary font-medium' 
                      : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  {formatTime(mass.time)}
                  {mass.language !== "English" && ` (${mass.language})`}
                </span>
              ))}
              {masses.length > 3 && (
                <span className="bg-neutral-100 text-neutral-700 text-sm py-1 px-2 rounded">
                  +{masses.length - 3} more
                </span>
              )}
            </div>
          ) : (
            <p className="text-sm text-neutral-500 mt-2">No masses scheduled for today</p>
          )}
        </div>
        
        <div className="mt-4">
          <Link href={`/churches/${id}`}>
            <a className="text-primary hover:text-primary-dark font-medium text-sm flex items-center">
              View details 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
