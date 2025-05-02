import { Facebook, Twitter, Instagram, Youtube, Church, HeadphonesIcon, MapPin, Calendar, Cross, BookOpen, Users } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/5 rounded-full mix-blend-overlay blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center mb-5">
              <div className="bg-white/10 p-2 rounded-full mr-3">
                <Church className="text-white h-6 w-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">Catholic<span className="text-white/80">Connect</span></h2>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your gateway to Catholic churches, masses, and community events across the country. Connecting believers with their spiritual homes.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-5 flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-white/70" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/churches">
                  <a className="text-white/70 hover:text-white transition-colors">Find Churches</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Today's Masses</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Special Events</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Faith Resources</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Community Groups</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-5 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-white/70" />
              Features
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Church Directory</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Mass Finder</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <span className="bg-primary/20 text-white text-xs px-2 py-0.5 rounded-full mr-2">New</span>
                  Confession Times
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Multilingual Masses</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Parish Events</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-5 flex items-center">
              <Users className="h-4 w-4 mr-2 text-white/70" />
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-white/70 hover:text-white transition-colors">Our Mission</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">For Churches</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-5 flex items-center">
              <Cross className="h-4 w-4 mr-2 text-white/70" />
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center rounded-full px-4 py-2 mt-2">
                  <HeadphonesIcon size={16} className="mr-2" /> Live Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CatholicConnect. All rights reserved.
            </p>
            <div className="flex items-center flex-wrap justify-center gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
