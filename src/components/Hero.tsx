
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Marrakech cityscape"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute z-10 top-1/3 left-10 w-32 h-32 rounded-full bg-morocco-terracotta/20 blur-2xl animate-float"></div>
      <div className="absolute z-10 bottom-1/4 right-10 w-32 h-32 rounded-full bg-morocco-blue/20 blur-2xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 bg-zellige-pattern opacity-10 z-5"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-terracotta text-white rounded-full mb-6">
            Discover Marrakech Through Events
          </span>
          <h1 className="title-large text-white mb-6">
            Experience the Magic of Marrakech Through Unforgettable Events
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-lg">
            Immerse yourself in authentic Moroccan experiences, from traditional festivals to exclusive private events in the heart of the Red City.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#events" className="btn-primary group">
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#book" className="btn-secondary">
              Plan Your Event
            </a>
          </div>
          
          {/* Stats - Quick Numbers */}
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              { number: "50+", label: "Event Venues" },
              { number: "200+", label: "Events Organized" },
              { number: "5000+", label: "Happy Guests" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center animate-fade-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: "forwards" }}
              >
                <span className="text-morocco-gold text-3xl font-bold font-playfair">{stat.number}</span>
                <span className="text-white/80 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
        <span className="text-white text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
