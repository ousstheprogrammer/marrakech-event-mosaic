
import { Award, Heart, MapPin, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23c35831\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-morocco-terracotta/10 text-morocco-terracotta rounded-full mb-3">
              About Us
            </span>
            <h2 className="title-medium mb-6">Creating Memorable Experiences in the Heart of Morocco</h2>
            <p className="text-muted-foreground mb-6">
              Founded with a passion for showcasing the true essence of Moroccan culture, Marrakech Events has been curating exceptional experiences since 2010. Our team of local experts combines authentic traditions with modern event planning techniques to create unforgettable moments for our clients.
            </p>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to attend a cultural festival, plan a corporate retreat, or organize a wedding in one of Marrakech's stunning venues, our dedicated team ensures every detail is perfected with the signature Moroccan touch of hospitality and excellence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-morocco-terracotta/10 text-morocco-terracotta mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1">300+</h3>
                <p className="text-sm text-muted-foreground">Events Organized</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-morocco-terracotta/10 text-morocco-terracotta mb-3">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1">98%</h3>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-morocco-terracotta/10 text-morocco-terracotta mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1">25+</h3>
                <p className="text-sm text-muted-foreground">Unique Venues</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-morocco-terracotta/10 text-morocco-terracotta mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1">15,000+</h3>
                <p className="text-sm text-muted-foreground">Guests Served</p>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team organizing an event in Marrakech" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-morocco-blue/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-morocco-terracotta/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
