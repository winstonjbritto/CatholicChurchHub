import { Facebook, Twitter, Instagram, Youtube, Church, HeadphonesIcon } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Church className="text-accent h-6 w-6 mr-2" />
              <h2 className="font-heading text-2xl font-bold">CatholicConnect</h2>
            </div>
            <p className="text-neutral-400 mb-4">
              Your gateway to Catholic churches, masses, and community events across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/churches">
                  <a className="text-neutral-400 hover:text-white transition">Find Churches</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Today's Masses</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Special Events</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Faith Resources</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Community Groups</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-neutral-400 hover:text-white transition">Our Mission</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">For Churches</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Blog</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Careers</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">Cookie Policy</a>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-accent hover:text-accent-light font-medium transition flex items-center">
                  <HeadphonesIcon size={16} className="mr-2" /> Live Chat Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CatholicConnect. All rights reserved.
            </p>
            <div className="flex items-center">
              <a href="#" className="text-neutral-400 hover:text-white text-sm mx-3 transition">
                Privacy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm mx-3 transition">
                Terms
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm mx-3 transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
