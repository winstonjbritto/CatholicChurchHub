import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Church } from "lucide-react";
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
  
  const closeMenu = () => setMenuOpen(false);
  
  const routes = [
    { path: "/", label: "Home" },
    { path: "/churches", label: "Churches" },
    { path: "/about", label: "About" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Church className="text-primary h-6 w-6 mr-2" />
                <h1 className="font-heading text-2xl font-bold text-primary">CatholicConnect</h1>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6 ml-8">
              {routes.map((route) => (
                <Link key={route.path} href={route.path}>
                  <a className={`font-semibold transition ${location === route.path ? 'text-primary' : 'hover:text-primary'}`}>
                    {route.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
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
            
            <Button>
              Sign In
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center mt-3">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center mb-6">
                  <Church className="text-primary h-6 w-6 mr-2" />
                  <h2 className="font-heading text-xl font-bold text-primary">CatholicConnect</h2>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {routes.map((route) => (
                    <Link key={route.path} href={route.path}>
                      <a 
                        className={`font-semibold transition p-2 rounded-md ${
                          location === route.path 
                            ? 'bg-primary/10 text-primary' 
                            : 'hover:bg-neutral-100'
                        }`}
                        onClick={closeMenu}
                      >
                        {route.label}
                      </a>
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto space-y-4">
                  <Button className="w-full" onClick={closeMenu}>
                    Sign In
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
