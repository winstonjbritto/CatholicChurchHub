import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, Church, MapPin, Globe } from "lucide-react";
import LocationSelector from "./common/LocationSelector";
import LanguageSelector from "./common/LanguageSelector";
import { UserLocation } from "@/types";

interface HeaderProps {
  currentLocation: UserLocation;
  setCurrentLocation: (location: UserLocation) => void;
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

export default function Header({ 
  currentLocation, 
  setCurrentLocation,
  currentLanguage,
  setCurrentLanguage
}: HeaderProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for transparent to solid transition
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const closeMenu = () => setMenuOpen(false);
  
  const routes = [
    { path: "/", label: "Home" },
    { path: "/churches", label: "Churches" },
    { path: "/about", label: "About" }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer group">
                <div className="bg-primary/10 p-2 rounded-full mr-3 group-hover:bg-primary/20 transition-colors">
                  <Church className="text-primary h-5 w-5" />
                </div>
                <h1 className="font-heading text-xl font-bold gradient-text-primary">
                  CatholicConnect
                </h1>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1 ml-8">
              {routes.map((route) => (
                <Link 
                  key={route.path} 
                  href={route.path} 
                  className={`font-medium px-4 py-2 rounded-full transition-colors ${
                    location === route.path 
                      ? 'text-primary bg-primary/5' 
                      : 'hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <div className="relative">
              <LocationSelector 
                currentLocation={currentLocation}
                onLocationChange={setCurrentLocation}
              />
            </div>
            
            <div className="relative">
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
              />
            </div>
            
            <Button className="rounded-full shadow-sm flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center mt-3">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] border-none bg-white/95 backdrop-blur-md">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center mb-8">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Church className="text-primary h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-bold gradient-text-primary">CatholicConnect</h2>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {routes.map((route) => (
                    <Link 
                      key={route.path} 
                      href={route.path}
                      className={`font-medium transition-colors p-3 rounded-xl ${
                        location === route.path 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-primary/5 hover:text-primary'
                      }`}
                      onClick={closeMenu}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 space-y-4 border-t border-neutral-200 pt-6">
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-muted/50 transition-colors">
                    <MapPin className="w-5 h-5 text-primary/70" />
                    <div>
                      <div className="text-sm font-medium">Your Location</div>
                      <div className="text-xs text-muted-foreground">{currentLocation.displayName}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-muted/50 transition-colors">
                    <Globe className="w-5 h-5 text-primary/70" />
                    <div>
                      <div className="text-sm font-medium">Language</div>
                      <div className="text-xs text-muted-foreground">{currentLanguage}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button className="w-full rounded-xl flex items-center justify-center gap-2" onClick={closeMenu}>
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
