
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="w-full h-[500px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531246149669-186150caca48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Marrakech marketplace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-morocco-terracotta/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-playfair font-bold text-morocco-terracotta">10+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Years of Experience</h4>
                    <p className="text-muted-foreground">Creating unforgettable events</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-morocco-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">100% Authentic</span>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-terracotta/10 text-morocco-terracotta rounded-full mb-3">
              About Us
            </span>
            <h2 className="title-medium mb-6">
              Crafting Authentic Moroccan Experiences Since 2013
            </h2>
            <p className="text-muted-foreground mb-6">
              Based in the heart of Marrakech, our team of local experts is passionate about sharing the rich culture, traditions, and beauty of Morocco through carefully curated events. From intimate weddings in traditional riads to large corporate gatherings in luxurious desert camps, we bring the magic of Morocco to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Cultural Events", description: "Authentic experiences showcasing Moroccan traditions" },
                { title: "Destination Weddings", description: "Magical ceremonies in stunning Moroccan venues" },
                { title: "Corporate Retreats", description: "Team building with a unique cultural twist" },
                { title: "Private Celebrations", description: "Exclusive parties in breathtaking locations" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-morocco-terracotta/10 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4 text-morocco-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#events" className="btn-primary">
              Discover Our Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-morocco-terracotta/5 rounded-full"></div>
      <div className="absolute top-32 right-10 w-20 h-20 bg-morocco-gold/10 rounded-full"></div>
    </section>
  );
};

export default AboutSection;
