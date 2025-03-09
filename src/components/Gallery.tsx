
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1545041051-f10c8ba1a180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Moroccan riad courtyard with fountain",
      category: "venues"
    },
    {
      src: "https://images.unsplash.com/photo-1551090506-2c7d8287b4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional Moroccan wedding setup",
      category: "weddings"
    },
    {
      src: "https://images.unsplash.com/photo-1577048982702-cedcfeaa910f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Corporate event in Marrakech",
      category: "corporate"
    },
    {
      src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Moroccan cultural festival",
      category: "cultural"
    },
    {
      src: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury desert camp setup",
      category: "venues"
    },
    {
      src: "https://images.unsplash.com/photo-1576437157178-8c5d45ca6884?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Moroccan themed party decorations",
      category: "cultural"
    },
    {
      src: "https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional moroccan dining setup",
      category: "venues"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beachside wedding in Morocco",
      category: "weddings"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-moroccan-pattern">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-blue/10 text-morocco-blue rounded-full mb-3">
            Our Gallery
          </span>
          <h2 className="title-medium mb-6">Explore Our Enchanting Venues & Past Events</h2>
          <p className="text-muted-foreground">
            Immerse yourself in the beauty of Morocco through our collection of venues, past events, and cultural experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'venues', 'weddings', 'corporate', 'cultural'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-morocco-terracotta text-white shadow-lg'
                  : 'bg-white text-muted-foreground hover:bg-morocco-terracotta/10'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md h-64 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-2 py-1 bg-morocco-terracotta/90 text-white text-xs rounded-full mb-2">
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-12 w-32 h-32 rounded-full bg-morocco-gold/5 animate-float"></div>
      <div className="absolute bottom-1/4 -left-16 w-40 h-40 rounded-full bg-morocco-blue/5 animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Gallery;
