
import { Calendar, Clock, MapPin } from 'lucide-react';

export interface EventCardProps {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  featured?: boolean;
}

const EventCard = ({ 
  title, 
  category, 
  date, 
  time, 
  location, 
  image,
  featured = false
}: EventCardProps) => {
  return (
    <div 
      className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl ${
        featured ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[3/4]'
      }`}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full justify-end p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-morocco-blue text-white rounded-full mb-3 w-fit">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-playfair">{title}</h3>
        
        <div className="space-y-2 text-white/90 text-sm mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-morocco-gold" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-morocco-gold" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-morocco-gold" />
            <span>{location}</span>
          </div>
        </div>

        <a 
          href="#" 
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-morocco-terracotta/80 hover:bg-morocco-terracotta transition-all duration-300 mt-auto w-full md:w-auto"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default EventCard;
