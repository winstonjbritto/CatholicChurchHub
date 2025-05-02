import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { 
  ChevronLeft,
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Cross, 
  Info, 
  Calendar, 
  Clock 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Church, Mass } from "@/types";
import { formatTime, getDayName, getTodayDayOfWeek } from "@/lib/utils";
import ChurchMassList from "@/components/churches/ChurchMassList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

interface ChurchDetailsProps {
  id: number;
}

export default function ChurchDetails({ id }: ChurchDetailsProps) {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  
  // Fetch church details
  const { 
    data: church, 
    isLoading: isLoadingChurch, 
    error: churchError 
  } = useQuery<Church>({
    queryKey: [`/api/churches/${id}`],
  });
  
  // Fetch masses for this church
  const { 
    data: masses, 
    isLoading: isLoadingMasses, 
    error: massesError 
  } = useQuery<Mass[]>({
    queryKey: [`/api/churches/${id}/masses`],
    enabled: !!church,
  });
  
  useEffect(() => {
    if (churchError) {
      toast({
        title: "Error loading church details",
        description: "We couldn't load this church's information. Please try again later.",
        variant: "destructive",
      });
      
      // Navigate back to churches page on error
      setTimeout(() => navigate("/churches"), 3000);
    }
    
    if (massesError) {
      toast({
        title: "Error loading mass schedules",
        description: "We couldn't load the mass schedules for this church. Please try again later.",
        variant: "destructive",
      });
    }
  }, [churchError, massesError, toast, navigate]);
  
  // Set page title
  useEffect(() => {
    if (church) {
      document.title = `${church.name} - CatholicConnect`;
      
      return () => {
        document.title = "CatholicConnect - Find Catholic Churches Near You";
      };
    }
  }, [church]);
  
  if (isLoadingChurch) {
    return <ChurchDetailSkeleton />;
  }
  
  if (!church) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-4">Church Not Found</h1>
        <p className="mb-6 text-neutral-600">This church doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/churches">Browse All Churches</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="bg-neutral-50 min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img 
          src={church.imageUrl || "https://images.unsplash.com/photo-1543968996-ee822b8176ba"} 
          className="w-full h-full object-cover" 
          alt={church.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <Button 
          variant="ghost" 
          className="absolute top-4 left-4 text-white hover:text-white hover:bg-black/20"
          onClick={() => navigate("/churches")}
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back
        </Button>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center mb-2">
            {church.isHistoric && (
              <>
                <Badge variant="secondary" className="bg-white text-primary">HISTORIC</Badge>
                <span className="mx-2 text-white">•</span>
              </>
            )}
            {church.yearEstablished && (
              <span className="text-white text-sm">Est. {church.yearEstablished}</span>
            )}
          </div>
          <h1 className="text-white font-heading text-3xl md:text-4xl font-bold">{church.name}</h1>
          <p className="text-white opacity-90 mt-1 flex items-center">
            <MapPin className="h-4 w-4 mr-1" /> 
            {church.address}, {church.city}, {church.state} {church.zipCode}
          </p>
        </div>
      </div>
      
      {/* Church Details */}
      <div className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-2/3 px-3">
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold mb-3">About This Church</h3>
                  <p className="text-neutral-600">
                    {church.description || 
                     `${church.name} is a Catholic church located in ${church.city}, ${church.state}. 
                      Visit this church for masses, confession, and community events.`}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {church.hasConfession && (
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Cross className="text-primary mr-2 h-4 w-4" />
                        <h4 className="font-bold">Confession</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        {church.confessionHours || "Please contact the church for confession hours"}
                      </p>
                    </div>
                  )}
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Phone className="text-primary mr-2 h-4 w-4" />
                      <h4 className="font-bold">Contact</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {church.phone && <>{church.phone}<br /></>}
                      {church.email && <>{church.email}</>}
                    </p>
                  </div>
                  
                  {church.website && (
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Globe className="text-primary mr-2 h-4 w-4" />
                        <h4 className="font-bold">Website</h4>
                      </div>
                      <p className="text-sm text-neutral-600">
                        <a 
                          href={church.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Visit Official Website
                        </a>
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Mass Schedule Calendar */}
                {masses && masses.length > 0 && (
                  <div className="mt-8">
                    <ChurchMassList 
                      masses={masses} 
                      churchId={church.id}
                      viewType="week" 
                    />
                  </div>
                )}
              </div>
              
              <div className="w-full lg:w-1/3 px-3 mt-6 lg:mt-0">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-heading text-xl font-bold mb-3">Today's Masses</h3>
                  
                  {isLoadingMasses ? (
                    <div className="space-y-3">
                      <Skeleton className="h-16 w-full rounded" />
                      <Skeleton className="h-16 w-full rounded" />
                      <Skeleton className="h-16 w-full rounded" />
                    </div>
                  ) : masses && masses.length > 0 ? (
                    <div className="space-y-3">
                      {masses
                        .filter(mass => mass.dayOfWeek === getTodayDayOfWeek())
                        .map(mass => (
                          <div 
                            key={mass.id}
                            className={`flex items-center justify-between p-2 bg-white rounded border-l-4 ${
                              mass.isSpecial ? 'border-accent' : 'border-primary'
                            }`}
                          >
                            <div>
                              <p className="font-bold">{formatTime(mass.time)}</p>
                              <p className="text-sm text-neutral-600">
                                {mass.language} • {mass.priestName || "Celebrant"}
                              </p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${
                              mass.isSpecial 
                                ? 'bg-accent bg-opacity-10 text-accent' 
                                : 'bg-neutral-100 text-neutral-700'
                            }`}>
                              {mass.isSpecial ? 'Special' : 'Regular'}
                            </span>
                          </div>
                        ))
                      }
                      
                      {masses.filter(mass => mass.dayOfWeek === getTodayDayOfWeek()).length === 0 && (
                        <p className="text-center text-sm text-neutral-500 py-2">No masses scheduled for today</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-center text-sm text-neutral-500 py-2">
                      No mass information available
                    </p>
                  )}
                  
                  <div className="mt-4">
                    <Button variant="link" className="text-primary hover:text-primary-dark text-sm p-0">
                      <Calendar className="w-4 h-4 mr-1" /> View full calendar
                    </Button>
                  </div>
                </div>
                
                {/* Map/Directions Section */}
                <div className="bg-neutral-50 p-4 rounded-lg mt-6">
                  <h3 className="font-heading text-lg font-bold mb-3">Location & Directions</h3>
                  
                  <div className="bg-neutral-200 rounded-lg h-40 flex items-center justify-center mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  
                  <Button className="w-full mb-2">Get Directions</Button>
                  <p className="text-xs text-center text-neutral-500">
                    {church.address}, {church.city}, {church.state} {church.zipCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading skeleton
function ChurchDetailSkeleton() {
  return (
    <div className="bg-neutral-50 min-h-screen pb-16">
      <Skeleton className="w-full h-64 md:h-80" />
      
      <div className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-2/3 px-3">
                <div className="mb-6">
                  <Skeleton className="h-8 w-64 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-32 w-full rounded-lg" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/3 px-3 mt-6 lg:mt-0">
                <Skeleton className="h-8 w-48 mb-3" />
                <Skeleton className="h-16 w-full mb-2 rounded" />
                <Skeleton className="h-16 w-full mb-2 rounded" />
                <Skeleton className="h-16 w-full rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
