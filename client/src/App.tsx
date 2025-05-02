import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ChurchList from "@/pages/ChurchList";
import ChurchDetails from "@/pages/ChurchDetails";
import About from "@/pages/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { UserLocation } from "./types";

function Router() {
  const [currentLocation, setCurrentLocation] = useState<UserLocation>({ 
    city: "New York", 
    state: "NY", 
    displayName: "New York, NY" 
  });

  const [currentLanguage, setCurrentLanguage] = useState<string>("English");

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        currentLocation={currentLocation} 
        setCurrentLocation={setCurrentLocation}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={() => 
            <Home 
              currentLocation={currentLocation} 
              currentLanguage={currentLanguage}
            />
          } />
          <Route path="/churches" component={() => 
            <ChurchList 
              currentLocation={currentLocation}
              currentLanguage={currentLanguage}
            />
          } />
          <Route path="/churches/:id" component={({params}) => 
            <ChurchDetails id={parseInt(params.id)} />
          } />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
