import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedEvents from '../components/FeaturedEvents';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { Calendar, Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react';

const Index = () => {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      // If it's a hash link, handle smooth scrolling
      e.preventDefault();
      const targetId = href === '#' ? 'home' : href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <AboutSection />
      <Gallery />
      
      {/* Testimonials Section */}
      <section className="section-padding bg-morocco-blue/5">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-blue/10 text-morocco-blue rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="title-medium mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Discover why clients trust us to create their perfect Moroccan events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Williams",
                role: "Wedding Client",
                quote: "Our wedding in Marrakech was a dream come true. The team handled every detail perfectly, from the traditional Moroccan decor to the local cuisine.",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "James Taylor",
                role: "Corporate Event Manager",
                quote: "The corporate retreat they organized for our team was exceptional. The blend of business facilities and cultural experiences was perfect.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Emma Rodriguez",
                role: "Cultural Festival Attendee",
                quote: "The festival was a beautiful immersion into Moroccan culture. The music, food, and activities were authentically curated and unforgettable.",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: "forwards" }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-morocco-gold" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-terracotta/10 text-morocco-terracotta rounded-full mb-3">
                Contact Us
              </span>
              <h2 className="title-medium mb-6">Let's Plan Your Perfect Event in Marrakech</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're planning a corporate event, wedding, or cultural experience, our team is ready to make it unforgettable. Fill out the form, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-morocco-terracotta/10 flex items-center justify-center mr-4">
                    <MapPin className="text-morocco-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-muted-foreground">Rue de la Kasbah, Medina, Marrakech 40000, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-morocco-terracotta/10 flex items-center justify-center mr-4">
                    <Mail className="text-morocco-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-muted-foreground">info@marrakechevents.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-morocco-terracotta/10 flex items-center justify-center mr-4">
                    <Phone className="text-morocco-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">+212 524 123 456</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="book" className="opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold mb-6 font-playfair">Book Your Event</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-muted-foreground">
                          <User size={16} />
                        </div>
                        <input
                          type="text"
                          className="w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-morocco-terracotta focus:ring-offset-2"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-muted-foreground">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          className="w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-morocco-terracotta focus:ring-offset-2"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-muted-foreground">
                          <Phone size={16} />
                        </div>
                        <input
                          type="tel"
                          className="w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-morocco-terracotta focus:ring-offset-2"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Event Date
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-muted-foreground">
                          <Calendar size={16} />
                        </div>
                        <input
                          type="date"
                          className="w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-morocco-terracotta focus:ring-offset-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      Event Type
                    </label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-morocco-terracotta focus:ring-offset-2"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="cultural">Cultural Experience</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-muted-foreground">
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        className="w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-morocco-terracotta focus:ring-offset-2 min-h-[120px]"
                        placeholder="Tell us about your event..."
                      ></textarea>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-morocco-blue/5 rounded-full"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-morocco-terracotta/5 rounded-full"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

