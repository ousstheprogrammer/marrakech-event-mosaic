
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Star } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-effect shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center font-playfair text-2xl font-bold text-morocco-terracotta group"
        >
          <div className="relative mr-2 w-8 h-8 flex items-center justify-center overflow-hidden">
            <Star className="h-6 w-6 text-morocco-gold group-hover:animate-spin-slow" strokeWidth={1.5} />
          </div>
          Marrakech<span className="text-morocco-blue">Events</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-base font-medium transition-colors hover:text-morocco-terracotta before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-morocco-terracotta before:transition-all hover:before:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#book" 
            className="btn-primary flex items-center space-x-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Event</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-morocco-terracotta focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col glass-effect animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium border-b border-gray-200 dark:border-gray-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book" 
              className="btn-primary w-full text-center mt-4 flex items-center justify-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              <span>Book Event</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
