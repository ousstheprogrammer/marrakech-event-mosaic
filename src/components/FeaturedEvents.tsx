
import { useEffect } from 'react';
import EventCard, { EventCardProps } from './EventCard';

const eventsData: EventCardProps[] = [
  {
    id: 1,
    title: "Moroccan Royal Gala Dinner",
    category: "Cultural",
    date: "October 15, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "La Mamounia Palace",
    image: "https://images.unsplash.com/photo-1510158105534-9b01f2462ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Marrakech Film Festival",
    category: "Entertainment",
    date: "November 5-13, 2023",
    time: "Various Times",
    location: "Palais des Congrès",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Traditional Craft Workshop",
    category: "Workshop",
    date: "September 28, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Medina Quarter",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Desert Stargazing Experience",
    category: "Adventure",
    date: "October 22, 2023",
    time: "8:00 PM - 12:00 AM",
    location: "Agafay Desert",
    image: "https://images.unsplash.com/photo-1543702394-52cbd700a8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Moroccan Cooking Class",
    category: "Culinary",
    date: "October 10, 2023",
    time: "11:00 AM - 3:00 PM",
    location: "Riad Dar Namir",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedEvents = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.event-card-animation');
    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="events" className="section-padding bg-gradient-to-b from-background to-muted subtle-pattern">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-terracotta/10 text-morocco-terracotta rounded-full mb-3">
            Upcoming Events
          </span>
          <h2 className="title-medium mb-6">Discover Our Curated Events in Marrakech</h2>
          <p className="text-muted-foreground">
            From traditional celebrations to modern gatherings, our events showcase the rich cultural tapestry of Morocco while providing unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {eventsData.map((event, index) => (
            <div 
              key={event.id} 
              className={`event-card-animation opacity-0 ${event.featured ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
