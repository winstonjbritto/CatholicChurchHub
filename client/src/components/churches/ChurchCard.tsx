import { Link } from "wouter";
import { Heart, MapPin, Star, ArrowRight, Clock } from "lucide-react";
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
    <Card className="rounded-2xl overflow-hidden hover-lift bg-white/80 backdrop-blur-sm border border-white/20">
      <div className="relative h-48">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1550340499-a6c60c554998"} 
          className="w-full h-full object-cover" 
          alt={name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-3 right-3 glass-effect rounded-full p-2">
          <Heart className="text-white h-5 w-5" />
        </div>
        <div className="absolute bottom-3 left-3 flex items-center">
          <span className="glass-effect text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <Star className="h-3 w-3 mr-1 text-yellow-300 fill-yellow-300" />
            {rating || "4.5"}
          </span>
          {church.isHistoric && (
            <span className="glass-effect text-white text-xs font-medium px-2 py-1 rounded-full ml-2">
              Historic
            </span>
          )}
        </div>
      </div>
      
      <CardContent className="p-5">
        <h3 className="font-heading text-xl font-bold mb-2 text-foreground">{name}</h3>
        
        <p className="text-muted-foreground flex items-center text-sm mb-4">
          <MapPin className="h-4 w-4 text-primary mr-1" />
          {city}, {state}
        </p>
        
        <div className="rounded-xl bg-muted p-3">
          <p className="font-medium text-foreground flex items-center text-sm mb-2">
            <Clock className="h-4 w-4 text-primary mr-1.5" /> 
            Today's Masses
          </p>
          
          {masses.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {masses.slice(0, 3).map((mass) => (
                <span 
                  key={mass.id}
                  className={`text-xs py-1.5 px-3 rounded-full flex items-center ${
                    mass.isSpecial 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'bg-white text-foreground'
                  }`}
                >
                  {formatTime(mass.time)}
                  {mass.language !== "English" && ` (${mass.language})`}
                </span>
              ))}
              {masses.length > 3 && (
                <span className="bg-white text-foreground text-xs py-1.5 px-3 rounded-full">
                  +{masses.length - 3} more
                </span>
              )}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">No masses scheduled for today</p>
          )}
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link href={`/churches/${id}`}>
            <a className="text-primary hover:text-primary-dark font-medium text-sm flex items-center group">
              View details 
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
