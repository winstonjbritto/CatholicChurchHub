import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function AppPromotion() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/90 to-secondary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay blur-xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <span className="inline-block glass-effect text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Phone className="w-3.5 h-3.5 inline-block mr-1.5" /> Mobile Experience
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Take CatholicConnect<br/>
              <span className="text-white/80">With You Everywhere</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-xl text-lg leading-relaxed">
              Download our mobile app to find churches, mass times, and events on the go. Never miss an important service again.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center glass-effect hover:bg-white/20 text-white border-white/20 rounded-xl py-6 px-5 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mr-3">
                  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                  <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.196 7.616.573a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                </svg>
                <div>
                  <div className="text-xs font-light">Download on the</div>
                  <div className="font-bold text-base">App Store</div>
                </div>
              </Button>
              
              <Button variant="outline" className="flex items-center glass-effect hover:bg-white/20 text-white border-white/20 rounded-xl py-6 px-5 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.873 2.893a.43.43 0 01.761 0l5.254 9.1a14.21 14.21 0 01-2.16-.825C7.03 10.15 5.343 8.673 5.003 8.283L3.5 5.679v.001L5.874 2.89l-.001.002z" />
                  <path d="M5.5 15.805a.42.42 0 01-.397-.562L8.294 8.69c.349.275 2.094 1.69 4.584 2.711 1.078.442 2.188.766 3.242.978l-8.97 4.07a.42.42 0 01-.63-.643h-.02z" />
                  <path d="M16.332 15.863a.42.42 0 01-.762 0l-3.54-6.132c1.145.173 2.274.224 3.3.158.454-.03.89-.083 1.301-.152.248-.041.494-.092.735-.15l2.73 4.73a.43.43 0 010 .43l-2.376 4.116h-.001l-1.387-3z" />
                  <path d="M18.497 8.217a.42.42 0 01.396.562l-.569 1.335-2.387-4.132a.42.42 0 01.004-.43l1.382-2.393.003-.003 3.249 5.627-2.078-.566z" />
                </svg>
                <div>
                  <div className="text-xs font-light">Get it on</div>
                  <div className="font-bold text-base">Google Play</div>
                </div>
              </Button>
            </div>
            
            <div className="mt-8">
              <a href="#" className="text-white/90 hover:text-white flex items-center font-medium transition-colors">
                Learn more about the app <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative perspective-800">
              <div className="transform rotate-y-10 rotate-z-3">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  className="w-64 h-auto rounded-3xl shadow-2xl border-4 border-white/20" 
                  alt="Mobile app screenshot" 
                />
              </div>
              <div className="absolute -right-8 -bottom-10 transform -rotate-y-10 rotate-z-3">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  className="w-64 h-auto rounded-3xl shadow-2xl border-4 border-white/20 hover-lift" 
                  alt="Mobile app screenshot" 
                />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-16 right-10 w-12 h-12 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
