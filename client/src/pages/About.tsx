import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img 
          src="https://images.unsplash.com/photo-1516051662687-567d7c4e8f6c"
          className="w-full h-full object-cover" 
          alt="Church interior" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-white font-heading text-3xl md:text-4xl font-bold">About CatholicConnect</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-neutral-800">Our Mission</h2>
          
          <p className="text-neutral-600 mb-4">
            CatholicConnect was created with a simple yet profound mission: to help Catholics and those interested in the faith find and connect with churches in their area. We believe that a vibrant spiritual life is nurtured through participation in a faith community.
          </p>
          
          <p className="text-neutral-600 mb-8">
            Our platform provides a comprehensive directory of Catholic churches across the country, complete with mass schedules, confession times, and other important information. We aim to make the search for a spiritual home as easy and accessible as possible.
          </p>
          
          <h3 className="font-heading text-xl font-bold mb-4 text-neutral-800">What We Offer</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-primary">Church Directory</h4>
              <p className="text-neutral-600 text-sm">
                A comprehensive database of Catholic churches with detailed information about each parish.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-primary">Mass Schedules</h4>
              <p className="text-neutral-600 text-sm">
                Up-to-date information on mass times, including regular weekly masses and special liturgical celebrations.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-primary">Location Services</h4>
              <p className="text-neutral-600 text-sm">
                Find churches near you with our easy-to-use location search feature.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-primary">Faith Resources</h4>
              <p className="text-neutral-600 text-sm">
                Educational content about Catholic teachings, traditions, and practices.
              </p>
            </div>
          </div>
          
          <h3 className="font-heading text-xl font-bold mb-4 text-neutral-800">Our Story</h3>
          
          <p className="text-neutral-600 mb-4">
            CatholicConnect was founded by a group of devoted Catholics who recognized the need for a modern, user-friendly platform to help the faithful find churches and mass times. What began as a small project has grown into a nationwide resource for Catholics and those exploring the faith.
          </p>
          
          <p className="text-neutral-600 mb-8">
            We work closely with dioceses and parishes to ensure that our information is accurate and up-to-date. Our team is committed to continually improving the platform to better serve the Catholic community.
          </p>
          
          <h3 className="font-heading text-xl font-bold mb-4 text-neutral-800">Join Our Community</h3>
          
          <p className="text-neutral-600 mb-6">
            We invite you to join our growing community of users who are finding their spiritual home through CatholicConnect. Whether you're a lifelong Catholic, a recent convert, or simply curious about the faith, our platform is designed to help you on your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/churches">Find a Church</Link>
            </Button>
            
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
