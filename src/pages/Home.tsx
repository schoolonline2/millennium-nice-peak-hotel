import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { hotelImages, rooms, halls, faqs } from "../data/mockData";
import { ChevronDown, Star, ShieldCheck, Wifi, UtensilsCrossed, CalendarDays, Waves, Clock, CarFront, Users, ThumbsUp, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

// Helper components
const SectionHeading = ({ children, align = "center", subtitle }: { children: React.ReactNode, align?: "center"|"left", subtitle?: string }) => (
  <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
    {subtitle && <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-3 block">{subtitle}</span>}
    <h2 className="font-serif text-3xl md:text-5xl text-royal">{children}</h2>
  </div>
);

// Hero Section
const heroSlides = [
  { image: hotelImages.exteriorDay, title: "Exterior Day View", transition: "fade" },
  { image: hotelImages.executiveSuite, title: "Executive Suite", transition: "zoom" },
  { image: hotelImages.pool, title: "Swimming Pool", transition: "slideLeft" },
  { image: hotelImages.restaurant, title: "Restaurant", transition: "scale" },
  { image: hotelImages.exteriorNight, title: "Exterior Night View", transition: "blur" }
]; // Simplified to 5 due to performance/code size

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getVariants = (type: string) => {
    switch (type) {
      case 'zoom': return { initial: { scale: 1.2, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { opacity: 0 } };
      case 'slideLeft': return { initial: { x: "100%", opacity: 0.5 }, animate: { x: 0, opacity: 1 }, exit: { x: "-100%", opacity: 0 } };
      case 'scale': return { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 1.1, opacity: 0 } };
      case 'blur': return { initial: { filter: "blur(20px)", opacity: 0 }, animate: { filter: "blur(0px)", opacity: 1 }, exit: { opacity: 0 } };
      default: return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-royal">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          variants={getVariants(heroSlides[currentSlide].transition)}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-charcoal/40" /> {/* Overlay */}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
            Welcome to<br />
            <span className="text-gold">Millennium Nice Peak Hotel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Experience Luxury, Comfort, and Exceptional Hospitality in the Heart of Ilorin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms" className="bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-sm font-medium tracking-wide transition-colors">
              Book Now
            </Link>
            <Link to="/rooms" className="bg-transparent border border-white hover:bg-white hover:text-royal text-white px-8 py-4 rounded-sm font-medium tracking-wide transition-colors">
              View Rooms
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase mb-2 opacity-70">Scroll</span>
        <ChevronDown size={24} className="opacity-70" />
      </motion.div>
    </section>
  );
};

// Main Home Component (to be expanded)
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Quick Booking Bar (Simulated) */}
      <section className="bg-white shadow-xl relative z-20 -mt-16 mx-4 md:mx-auto max-w-5xl rounded-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Check In</label>
            <input type="date" className="w-full border-b border-gray-300 py-2 focus:border-gold outline-none bg-transparent" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Check Out</label>
            <input type="date" className="w-full border-b border-gray-300 py-2 focus:border-gold outline-none bg-transparent" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Guests</label>
            <select className="w-full border-b border-gray-300 py-2 focus:border-gold outline-none bg-transparent">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
            </select>
          </div>
          <button className="bg-royal text-white hover:bg-royal/90 py-3 rounded-sm font-medium transition-colors w-full h-full">
            Check Availability
          </button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-royal">
             <div className="flex flex-col items-center">
               <span className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">10k+</span>
               <span className="text-sm font-medium uppercase tracking-wider">Guests Served</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">1k+</span>
               <span className="text-sm font-medium uppercase tracking-wider">Events Hosted</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">95%</span>
               <span className="text-sm font-medium uppercase tracking-wider">Satisfaction</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">24/7</span>
               <span className="text-sm font-medium uppercase tracking-wider">Hospitality</span>
             </div>
          </div>
        </div>
      </section>

       {/* About Section */}
       <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <img src={hotelImages.reception} alt="Reception" className="w-full h-[500px] object-cover rounded-sm shadow-2xl relative z-10" />
             <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-royal p-8 text-white hidden md:flex flex-col justify-center z-20 rounded-sm">
                <Star className="text-gold mb-4" size={32} />
                <h3 className="font-serif text-2xl mb-2">5-Star Experience</h3>
                <p className="text-sm text-gray-300">Defining luxury in the heart of Kwara State.</p>
             </div>
          </div>
          <div className="w-full lg:w-1/2">
             <SectionHeading align="left" subtitle="About Us">The Pinnacle of Hospitality</SectionHeading>
             <p className="text-gray-600 leading-relaxed mb-6">
               Welcome to Millennium Nice Peak Hotel, where elegance meets unparalleled comfort. Situated in the vibrant city of Ilorin, we offer a sanctuary of sophistication for both business and leisure travelers.
             </p>
             <p className="text-gray-600 leading-relaxed mb-10">
               Our commitment to excellence is reflected in every detail, from our exquisitely appointed rooms and suites to our world-class dining and event facilities. Experience a stay defined by personalized service, modern amenities, and a warm Nigerian welcome.
             </p>
             <Link to="/about" className="inline-flex items-center gap-2 text-royal font-medium border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                Discover Our Story <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading subtitle="Accommodation">Luxurious Stays</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room, idx) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white group rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-royal rounded-sm">
                     ₦{room.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">/ night</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="font-serif text-2xl text-royal">
                        <span className="text-gold mr-2 text-lg tracking-widest font-bold">#{room.roomNumber}</span>
                        {room.name}
                     </h3>
                     <div className="flex items-center gap-1 text-gold">
                       <Star size={16} fill="currentColor" />
                       <span className="text-sm text-charcoal font-medium">{room.rating}</span>
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1"><Users size={16} /> {room.capacity} Guests</span>
                    <span className="flex items-center gap-1"><CalendarDays size={16} /> {room.size}</span>
                  </div>
                  <div className="flex gap-4">
                     <Link to={`/rooms`} className="flex-1 bg-royal text-center text-white py-3 rounded-sm font-medium hover:bg-royal/90 transition-colors">Book Now</Link>
                     <Link to={`/rooms`} className="flex-1 bg-gray-100 text-center text-royal py-3 rounded-sm font-medium hover:bg-gray-200 transition-colors">Details</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/rooms" className="inline-flex items-center gap-2 text-royal font-medium border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                View All Rooms <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-royal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading subtitle="Premium Facilities">Hotel Amenities</SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: Waves, name: "Swimming Pool" },
              { icon: Wifi, name: "High-Speed WiFi" },
              { icon: UtensilsCrossed, name: "Gourmet Restaurant" },
              { icon: ShieldCheck, name: "24/7 Security" },
              { icon: CarFront, name: "Secure Parking" },
              { icon: Clock, name: "Room Service" },
              { icon: Users, name: "Conference Hall" },
              { icon: Star, name: "Premium Bar" }
            ].map((amenity, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.05 }}
                 className="flex flex-col items-center text-center p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors"
               >
                 <amenity.icon size={36} className="text-gold mb-4" />
                 <h4 className="font-medium text-lg">{amenity.name}</h4>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Hall CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row gap-16 items-center">
           <div className="w-full lg:w-1/2">
             <SectionHeading align="left" subtitle="Event Centre">Host Your Grand Events</SectionHeading>
             <p className="text-gray-600 leading-relaxed mb-6">
               From fairy-tale weddings to large-scale corporate conferences, our state-of-the-art event halls provide the perfect backdrop for any occasion.
             </p>
             <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3"><ShieldCheck className="text-gold" /> Accommodates up to 800 guests</li>
               <li className="flex items-center gap-3"><ShieldCheck className="text-gold" /> Advanced audio-visual capabilities</li>
               <li className="flex items-center gap-3"><ShieldCheck className="text-gold" /> Custom catering menus available</li>
             </ul>
             <Link to="/events" className="bg-royal text-white px-8 py-3 rounded-sm font-medium inline-flex hover:bg-royal/90 transition-colors">
               Explore Event Spaces
             </Link>
           </div>
           <div className="w-full lg:w-1/2">
              <img src={hotelImages.eventHall} alt="Event Hall" className="w-full h-[400px] object-cover rounded-sm shadow-xl" />
           </div>
        </div>
      </section>

      {/* Call to Action & Newsletter */}
      <section className="py-24 relative bg-charcoal">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 bg-fixed"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Exclusive Offers & Updates</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive priority booking, exclusive discounts, and news from Millennium Nice Peak Hotel.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Enter your email address" 
                 className="flex-grow px-6 py-4 bg-white/10 text-white placeholder-gray-400 border border-white/20 outline-none focus:border-gold rounded-sm transition-colors"
                 required
               />
               <button className="bg-gold text-white px-10 py-4 font-medium hover:bg-gold-hover transition-colors rounded-sm uppercase tracking-wider text-sm">
                 Subscribe
               </button>
            </form>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading subtitle="Common Queries">Frequently Asked Questions</SectionHeading>
          <div className="space-y-4">
             {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 mb-4">
                   <h4 className="font-serif text-xl text-royal mb-2 flex items-center justify-between">
                     {faq.question}
                     <ChevronDown className="text-gold" />
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
