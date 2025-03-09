
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-morocco-gold mb-4">
              Marrakech<span className="text-morocco-terracotta">Events</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Creating unforgettable experiences in the heart of Morocco, blending tradition with modern event planning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-morocco-terracotta transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-morocco-terracotta transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-morocco-terracotta transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Events</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Event Types</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Corporate Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Weddings</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Cultural Festivals</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Private Parties</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-morocco-gold transition-colors duration-300">Desert Experiences</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-morocco-terracotta mt-0.5" />
                <span className="text-gray-400">Rue de la Kasbah, Medina<br />Marrakech 40000, Morocco</span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-5 h-5 text-morocco-terracotta" />
                <span className="text-gray-400">+212 524 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-morocco-terracotta" />
                <span className="text-gray-400">info@marrakechevents.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Marrakech Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
