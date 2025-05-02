import { Cross, Phone, Globe, Calendar, MapPin, Clock } from "lucide-react";

export default function ChurchPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Preview
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">
            Explore Individual Church Pages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Detailed information about each church in our database
          </p>
        </div>
        
        <div className="glass-card rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto hover-lift perspective-800">
          <div className="relative h-72 md:h-96">
            <img 
              src="https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover" 
              alt="St. Mary's Cathedral" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center mb-2">
                <span className="glass-effect text-white text-xs font-medium px-3 py-1.5 rounded-full">HISTORIC</span>
                <span className="mx-2 text-white/50">•</span>
                <span className="text-white/90 text-sm">Est. 1891</span>
              </div>
              <h1 className="text-white font-heading text-3xl md:text-5xl font-bold mb-2">St. Mary's Cathedral</h1>
              <p className="text-white/90 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                1111 Gough St, San Francisco, CA
              </p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-2/3 px-4">
                <div className="mb-8">
                  <h3 className="font-heading text-xl font-bold mb-4">About This Church</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    St. Mary's Cathedral, also known as the Cathedral of Saint Mary of the Assumption, is the principal church of the Roman Catholic Archdiocese of San Francisco. The cathedral is located in the Cathedral Hill neighborhood of San Francisco.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                  <div className="bg-muted/50 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Cross className="text-primary mr-2 h-5 w-5" />
                      <h4 className="font-bold">Confession</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Wed-Fri: 11:00 AM - 12:00 PM<br/>Saturday: 3:30 PM - 5:00 PM
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Phone className="text-primary mr-2 h-5 w-5" />
                      <h4 className="font-bold">Contact</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      (415) 567-2020<br/>info@stmaryscathedral.org
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Globe className="text-primary mr-2 h-5 w-5" />
                      <h4 className="font-bold">Languages</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      English, Spanish, Latin<br/>(Special masses in Filipino)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/3 px-4">
                <div className="glass-card p-5 rounded-xl">
                  <h3 className="font-heading text-xl font-bold mb-4 flex items-center">
                    <Clock className="text-primary mr-2 h-5 w-5" /> 
                    Today's Masses
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl">
                      <div>
                        <p className="font-bold">7:00 AM</p>
                        <p className="text-sm text-muted-foreground">English • Fr. Michael</p>
                      </div>
                      <span className="text-xs bg-muted/50 px-3 py-1 rounded-full">Regular</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl">
                      <div>
                        <p className="font-bold">12:00 PM</p>
                        <p className="text-sm text-muted-foreground">English • Fr. James</p>
                      </div>
                      <span className="text-xs bg-muted/50 px-3 py-1 rounded-full">Regular</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl">
                      <div>
                        <p className="font-bold">5:30 PM</p>
                        <p className="text-sm text-muted-foreground">Spanish • Fr. Carlos</p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Special</span>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <button className="text-primary hover:text-primary-dark text-sm font-medium flex items-center group">
                      <Calendar className="w-4 h-4 mr-2" />
                      View full calendar
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
