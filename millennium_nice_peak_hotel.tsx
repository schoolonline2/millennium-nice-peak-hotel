import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Wifi, Utensils, Waves, Briefcase, Car, Bell, Wind, ShieldCheck, 
  Shirt, Plane, ChevronRight, Star, MapPin, Phone, Mail, Clock,
  Calendar, Users, CheckCircle, X, Copy, Lock, Menu, Instagram, 
  Facebook, Twitter, ArrowUp, ArrowRight
} from 'lucide-react';

// --- CONFIGURATION & THEME ---
const HOTEL_NAME = "Millennium Nice Peak Hotel";
const THEME = {
  gold: '#d4af37',
  goldHover: '#b5952f',
  dark: '#0a0a0a',
  darker: '#050505',
  card: '#1a1a1a',
  text: '#f8f8f8',
  textMuted: '#a3a3a3'
};

// --- HELPER FUNCTIONS ---
const formatNGN = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

// --- DATA GENERATION ---
const ROOM_CATEGORIES = [
  { name: 'Standard Room', min: 25000, max: 35000, img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop' },
  { name: 'Deluxe Room', min: 35000, max: 50000, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' },
  { name: 'Executive Room', min: 50000, max: 70000, img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop' },
  { name: 'Premium Deluxe Room', min: 70000, max: 90000, img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop' },
  { name: 'Family Suite', min: 90000, max: 130000, img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Business Suite', min: 120000, max: 180000, img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop' },
  { name: 'Presidential Suite', min: 200000, max: 350000, img: 'https://images.unsplash.com/photo-1631049552057-403b3656a58d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Royal Suite', min: 350000, max: 600000, img: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=800&auto=format&fit=crop' }
];

const AMENITIES_LIST = [
  { icon: Wifi, name: "Free High-Speed WiFi" },
  { icon: Utensils, name: "Gourmet Restaurant" },
  { icon: Waves, name: "Infinity Swimming Pool" },
  { icon: Briefcase, name: "Conference Hall" },
  { icon: Car, name: "Secure Valet Parking" },
  { icon: Bell, name: "24/7 Room Service" },
  { icon: Wind, name: "Climate Control AC" },
  { icon: ShieldCheck, name: "Advanced Security" },
  { icon: Shirt, name: "Premium Laundry" },
  { icon: Plane, name: "Airport Pickup" }
];

const generateRooms = () => {
  let rooms = [];
  let idCounter = 1;
  
  ROOM_CATEGORIES.forEach((cat, index) => {
    // Generate between 4 to 8 rooms per category to reach ~50
    const count = index < 2 ? 10 : index < 4 ? 8 : index < 6 ? 5 : 2;
    for (let i = 0; i < count; i++) {
      const price = Math.floor(Math.random() * ((cat.max - cat.min) / 1000)) * 1000 + cat.min;
      const roomNumber = `${index + 1}0${i + 1}`;
      let imageUrl = cat.img;

      // Custom override for specific room images
      if (roomNumber === '603') imageUrl = 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGihDL_PiXIPPznwpa0Ll4gPn4Ry4qvdUWcBwwiDqPkUIwspG6TDOot8GmebH0jok8D0PWLVlbYdzvDr04N_ka66_GbCKmnG-7XpEn2VQ8lJlUJ4EbkgHYZlqXqU1mWmYUHmtOfWSb9lHtM=s680-w680-h510-rw';
      if (roomNumber === '604') imageUrl = 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEV5FU4jJSU1q6QxRpKLPz2eNoWFychuBemFTHXulU0jtpDL1C8eaavz50UA5mR2EknbyxLhFpRDmszHF8GCn-2vMBdfh8Iz1VZssoOABrrTNsZTelyiT5fiyhjIhV2wJpqovqG=s680-w680-h510-rw';
      if (roomNumber === '605') imageUrl = 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAES9RV3FeFbD3RDp6QrOQCNAkFQTBIWZRkAaqSuU-N0yjDMsaaQTr_MXabg5mxpR1P2JRBIQSQtZTf4EfEQV_h3Ka-OXlu0_GE8r9rDje4oW7GMUDziC20G26gkroUWolOunVKeuUf4Pu7V=s680-w680-h510-rw';

      rooms.push({
        id: `RM-${1000 + idCounter}`,
        room_number: roomNumber,
        room_type: cat.name,
        price: price,
        capacity: index >= 4 ? (index === 4 ? 4 : 3) : 2,
        description: `Experience unparalleled luxury in our ${cat.name}. Designed with meticulous attention to detail, featuring panoramic views, premium bedding, and state-of-the-art amenities for the ultimate comfort.`,
        image_url: imageUrl,
        status: Math.random() > 0.2 ? 'Available' : 'Booked',
        amenities: ['WiFi', 'AC', 'Room Service', 'Smart TV', 'Mini Bar'].slice(0, 3 + Math.floor(Math.random() * 3))
      });
      idCounter++;
    }
  });
  return rooms;
};

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [rooms] = useState(generateRooms());
  const [bookings, setBookings] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Booking Flow State
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingStep, setBookingStep] = useState(0); // 0: none, 1: form, 2: payment, 3: confirmation
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setBookingStep(1);
  };

  const submitBooking = (data) => {
    setBookingData({ ...data, room: selectedRoom, ref: `MNP-${Math.floor(Math.random() * 1000000)}` });
    setBookingStep(2);
  };

  const confirmPayment = () => {
    const newBooking = {
      ...bookingData,
      id: bookingData.ref,
      status: 'Pending Verification',
      created_at: new Date().toISOString()
    };
    setBookings([newBooking, ...bookings]);
    setBookingStep(3);
  };

  const closeBookingModal = () => {
    setBookingStep(0);
    setSelectedRoom(null);
    setBookingData(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Playfair Display', serif; }
        body { font-family: 'Inter', sans-serif; }
        .glass { background: rgba(26, 26, 26, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(212, 175, 55, 0.1); }
        .glass-gold { background: rgba(212, 175, 55, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(212, 175, 55, 0.3); }
        .text-gold { color: #d4af37; }
        .bg-gold { background-color: #d4af37; }
        .border-gold { border-color: #d4af37; }
        .hover-gold:hover { color: #d4af37; border-color: #d4af37; }
        
        /* Smooth reveal animation classes */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #d4af37; }

        /* Floating particles animation */
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        .particle { position: absolute; background: #d4af37; border-radius: 50%; pointer-events: none; animation: float 8s infinite linear; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div 
            className="text-2xl md:text-3xl font-serif font-bold cursor-pointer flex items-center gap-2 group"
            onClick={() => navigateTo('home')}
          >
            <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm text-black group-hover:scale-105 transition-transform">
              M
            </div>
            <span className="tracking-wider">MILLENNIUM<span className="text-gold">.</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase">
            <button onClick={() => navigateTo('home')} className={`hover-gold transition-colors ${currentPage === 'home' ? 'text-gold' : 'text-white'}`}>Home</button>
            <button onClick={() => navigateTo('book')} className={`hover-gold transition-colors ${currentPage === 'book' ? 'text-gold' : 'text-white'}`}>Rooms & Suites</button>
            <button onClick={() => navigateTo('contact')} className={`hover-gold transition-colors ${currentPage === 'contact' ? 'text-gold' : 'text-white'}`}>Contact</button>
            <button 
              onClick={() => navigateTo('book')} 
              className="bg-gold text-black px-6 py-2.5 font-semibold hover:bg-yellow-600 transition-colors rounded-sm"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass border-t border-gray-800 p-6 flex flex-col space-y-4 md:hidden">
            <button onClick={() => navigateTo('home')} className="text-left text-lg hover:text-gold py-2 border-b border-gray-800">Home</button>
            <button onClick={() => navigateTo('book')} className="text-left text-lg hover:text-gold py-2 border-b border-gray-800">Rooms & Suites</button>
            <button onClick={() => navigateTo('contact')} className="text-left text-lg hover:text-gold py-2 border-b border-gray-800">Contact</button>
            <button onClick={() => navigateTo('admin')} className="text-left text-lg hover:text-gold py-2 border-b border-gray-800">Admin Login</button>
            <button onClick={() => navigateTo('book')} className="bg-gold text-black px-6 py-3 font-semibold mt-4 text-center rounded-sm">Book Your Stay</button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="min-h-screen">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} rooms={rooms} />}
        {currentPage === 'book' && <BookingPage rooms={rooms} onBook={handleBookRoom} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminDashboard bookings={bookings} rooms={rooms} />}
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm text-black">M</div>
                <span>MILLENNIUM<span className="text-gold">.</span></span>
              </div>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Experience the pinnacle of luxury at Millennium Nice Peak Hotel, where elegance meets unparalleled hospitality in the heart of Nigeria.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"><Twitter size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><button onClick={() => navigateTo('home')} className="hover:text-gold transition-colors">Our Hotel</button></li>
                <li><button onClick={() => navigateTo('book')} className="hover:text-gold transition-colors">Luxury Suites</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-gold transition-colors">Contact Us</button></li>
                <li><button className="hover:text-gold transition-colors">Dining & Bar</button></li>
                <li><button className="hover:text-gold transition-colors">Spa & Wellness</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 shrink-0" size={18} />
                  <span>Ukpabi Asika Road, Off Fate Rd,<br/>Oko Erin, Kwara</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-gold shrink-0" size={18} />
                  <span>+234 800 MILLENNIUM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-gold shrink-0" size={18} />
                  <span>reservations@millenniumnicepeak.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-6 text-white">Newsletter</h4>
              <p className="text-neutral-400 mb-4">Subscribe to receive exclusive offers and updates.</p>
              <div className="flex border border-gray-800 rounded-sm overflow-hidden focus-within:border-gold transition-colors">
                <input type="email" placeholder="Your email address" className="bg-transparent px-4 py-3 w-full outline-none text-sm" />
                <button className="bg-gold text-black px-4 font-medium hover:bg-yellow-600 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Millennium Nice Peak Hotel. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <button onClick={() => navigateTo('admin')} className="ml-4 opacity-30 hover:opacity-100 transition-opacity" title="Admin Access">
                <Lock size={14} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-neutral-900 border border-gray-800 rounded-full flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 z-40 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Modals */}
      {bookingStep > 0 && (
        <BookingModal 
          step={bookingStep} 
          room={selectedRoom} 
          onClose={closeBookingModal} 
          onSubmit={submitBooking}
          onConfirmPayment={confirmPayment}
          bookingData={bookingData}
        />
      )}
    </div>
  );
}

// --- HOME PAGE COMPONENT ---
function HomePage({ navigateTo, rooms }) {
  const featuredRooms = rooms.filter(r => r.capacity >= 2).slice(0, 8); // Grab 8 mixed rooms

  // Setup scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Deep luxury hotel placeholder image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url('images.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]" />
        
        {/* Floating Particles (CSS only) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle w-1 h-1 md:w-1.5 md:h-1.5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${80 + Math.random() * 20}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <span className="text-gold tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-6 block animate-[fadeIn_1s_ease-out]">
            Welcome to the Pinnacle of Elegance
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight animate-[slideUp_1s_ease-out_0.2s_both]">
            Millennium <br/><span className="text-gold italic font-light">Nice Peak</span> Hotel
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light animate-[slideUp_1s_ease-out_0.4s_both]">
            Discover unparalleled luxury and world-class hospitality in the heart of Nigeria. Your extraordinary escape awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-[slideUp_1s_ease-out_0.6s_both]">
            <button 
              onClick={() => navigateTo('book')}
              className="bg-gold text-black px-10 py-4 font-semibold tracking-wide hover:bg-white transition-colors duration-300 rounded-sm w-full sm:w-auto"
            >
              Book Your Stay
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="border border-white text-white px-10 py-4 font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300 rounded-sm w-full sm:w-auto glass"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white/50">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="text-gold uppercase tracking-widest text-sm font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                Redefining Luxury <br/>in <span className="text-gold">Nigeria</span>
              </h2>
              <p className="text-neutral-400 mb-6 leading-relaxed text-lg font-light">
                Nestled in the vibrant heart of the city, Millennium Nice Peak Hotel stands as a beacon of sophistication and premium comfort. With breathtaking architecture, meticulous attention to detail, and a commitment to flawless service, we curate unforgettable experiences for the modern traveler.
              </p>
              <p className="text-neutral-400 mb-10 leading-relaxed text-lg font-light">
                Whether you're here for high-stakes business or a serene getaway, our world-class facilities—from signature dining to state-of-the-art wellness centers—are designed to exceed your highest expectations.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-900">
                <div>
                  <div className="text-3xl font-serif text-white mb-2">50<span className="text-gold">+</span></div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">Luxury Suites</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-white mb-2">5<span className="text-gold"><Star className="inline h-5 w-5 -mt-1 fill-current" /></span></div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">Star Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-white mb-2">24<span className="text-gold">/</span>7</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">Concierge</div>
                </div>
              </div>
            </div>
            
            <div className="relative reveal delay-200">
              <div className="absolute inset-0 bg-gold/10 transform translate-x-6 translate-y-6 rounded-sm" />
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAErtHP7VezC55YxoNUxaxcRst6LjyYhXtTKg2Pn-o_p5GgDWyCEL45CX2QumVKbQFMQFnfR8QhqdPCXJGRNSSoe5bMoYeQy147-18vDS93YP2liByxBvQ5ADHkpRzwjxe1HAu1cZA=s680-w680-h510-rw" 
                alt="Hotel Lobby Interior" 
                className="relative z-10 w-full h-[600px] object-cover rounded-sm transition-all duration-700 hover:scale-105"
                onError={(e) => e.target.src = 'https://placehold.co/800x600/1a1a1a/d4af37?text=Millennium+Nice+Peak'}
              />
              <div className="absolute -bottom-10 -left-10 z-20 bg-[#111] p-6 border-l-2 border-gold hidden md:block glass shadow-2xl">
                <p className="font-serif text-2xl italic">"An absolute masterpiece <br/>of hospitality."</p>
                <p className="text-gold text-sm uppercase tracking-widest mt-4">- Luxury Travel Mag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Signature Stays</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Featured Accommodations</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Experience the perfect blend of modern design, supreme comfort, and tailored amenities designed exclusively for your relaxation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredRooms.map((room, index) => (
              <div 
                key={room.id} 
                className="group relative bg-[#0f0f0f] border border-gray-900 overflow-hidden hover:border-gold/30 transition-colors duration-500 reveal rounded-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={room.image_url} 
                    alt={room.room_type} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 text-sm text-gold border border-gold/20">
                    {formatNGN(room.price)} <span className="text-xs text-white/70">/ night</span>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif group-hover:text-gold transition-colors">{room.room_type}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, i) => (
                      <span key={i} className="text-xs border border-gray-800 text-neutral-400 px-2 py-1 rounded-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigateTo('book')}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-gold hover:text-white transition-colors group/btn"
                  >
                    View Details <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 reveal">
            <button 
              onClick={() => navigateTo('book')}
              className="border border-gold text-gold px-10 py-4 font-semibold tracking-wide hover:bg-gold hover:text-black transition-all duration-300 rounded-sm"
            >
              View All Suites
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 reveal">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Hotel Facilities</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Premium Amenities</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Every detail is considered to ensure your stay is flawless. From world-class dining to rejuvenating wellness centers, our facilities cater to your every desire.
              </p>
              <div className="hidden lg:block w-full h-[400px] mt-12 overflow-hidden rounded-sm group">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKeZOfIWm_WrnNmNu1dzfaszVSOyKIOdunUqUsTtEKQ&s=10" 
                  alt="Hotel Building"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {AMENITIES_LIST.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="glass p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:border-gold hover:-translate-y-2 transition-all duration-300 reveal"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-10 h-10 mb-4 text-neutral-500 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                    <h4 className="text-sm md:text-base font-medium">{item.name}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Location */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Reviews */}
            <div className="reveal">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Guest Experiences</span>
              <h2 className="text-4xl font-serif mb-12">What Our Guests Say</h2>
              
              <div className="space-y-8">
                {[
                  { name: "Oluwaseun Adebayo", text: "The epitome of luxury in Lagos. The Presidential Suite was breathtaking, and the service was impeccable from check-in to departure. Highly recommended.", role: "Business Traveler" },
                  { name: "Chioma Nwosu", text: "A truly 5-star experience. The culinary offerings at the restaurant were divine, and the staff's attention to detail made our anniversary unforgettable.", role: "Leisure Guest" }
                ].map((review, i) => (
                  <div key={i} className="glass p-8 border-l-2 border-gold relative">
                    <div className="flex text-gold mb-4">
                      {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-current" />)}
                    </div>
                    <p className="text-neutral-300 italic mb-6">"{review.text}"</p>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="reveal delay-200 h-full min-h-[400px] flex flex-col">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Location</span>
              <h2 className="text-4xl font-serif mb-12">Find Us in Kwara</h2>
              <div className="flex-grow w-full border border-gray-800 rounded-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126135.53086976964!2d4.538575043831885!3d8.484210606774393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103652b0bb05ba55%3A0xc3b7d344b1c5539f!2sIlorin%2C%20Kwara%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1717800000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Location"
                ></iframe>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

// --- BOOKING PAGE COMPONENT ---
function BookingPage({ rooms, onBook }) {
  const [filter, setFilter] = useState('All');
  
  const filteredRooms = filter === 'All' ? rooms : rooms.filter(r => r.room_type.includes(filter) || (filter === 'Suites' && r.room_type.includes('Suite')));

  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center animate-[fadeIn_1s_ease-out]">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Select Your Suite</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Browse our collection of impeccably designed rooms and suites. Discover the perfect sanctuary for your stay in Nigeria.</p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {['All', 'Standard', 'Deluxe', 'Executive', 'Suites'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 border rounded-full text-sm transition-all duration-300 ${filter === f ? 'bg-gold border-gold text-black font-semibold' : 'border-gray-800 text-neutral-400 hover:border-gold hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Room Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredRooms.map((room, index) => (
            <div key={room.id} className="flex flex-col md:flex-row bg-[#0f0f0f] border border-gray-900 group hover:border-gold/50 transition-all duration-300 animate-[fadeIn_0.5s_ease-out_both]" style={{ animationDelay: `${(index % 10) * 0.1}s` }}>
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                <img src={room.image_url} alt={room.room_type} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-xs px-3 py-1 border border-white/10 uppercase tracking-widest text-white/80">
                  Room {room.room_number}
                </div>
              </div>
              <div className="p-8 w-full md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-white">{room.room_type}</h3>
                  </div>
                  <div className="text-gold text-xl mb-4 font-medium">
                    {formatNGN(room.price)} <span className="text-sm text-neutral-500 font-normal">/ Night</span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-300 mb-8 border-t border-gray-900 pt-4">
                    <div className="flex items-center gap-1.5"><Users size={16} className="text-gold"/> Max {room.capacity}</div>
                    <div className="flex items-center gap-1.5"><Wind size={16} className="text-gold"/> AC</div>
                    <div className="flex items-center gap-1.5"><Wifi size={16} className="text-gold"/> Free WiFi</div>
                  </div>
                </div>
                <button 
                  onClick={() => onBook(room)}
                  disabled={room.status !== 'Available'}
                  className={`w-full py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border ${room.status === 'Available' ? 'border-gold text-gold hover:bg-gold hover:text-black' : 'border-gray-800 text-gray-600 cursor-not-allowed bg-gray-900/50'}`}
                >
                  {room.status === 'Available' ? 'Reserve Now' : 'Currently Booked'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredRooms.length === 0 && (
          <div className="text-center text-neutral-500 py-20">No rooms found matching your filter.</div>
        )}
      </div>
    </div>
  );
}

// --- BOOKING MODAL (MULTI-STEP) ---
function BookingModal({ step, room, onClose, onSubmit, onConfirmPayment, bookingData }) {
  // Step 1 State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '',
    checkIn: '', checkOut: '', guests: 1, requests: ''
  });
  
  // Calculations
  const calcDetails = useMemo(() => {
    if (!room) return null;
    let nights = 0;
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diffTime = Math.abs(end - start);
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    const validNights = nights > 0 ? nights : 1; // Default to 1 for display if dates not set properly
    const total = room.price * validNights;
    
    return { nights: validNights, total, pricePerNight: room.price };
  }, [formData.checkIn, formData.checkOut, room]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut) return alert("Please select dates");
    onSubmit({ ...formData, ...calcDetails });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-[#111] border border-gold/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.1)] relative">
        
        <button onClick={onClose} className="absolute top-6 right-6 text-neutral-400 hover:text-white z-10 bg-black/50 p-2 rounded-full backdrop-blur-md">
          <X size={24} />
        </button>

        {step === 1 && room && (
          <div className="flex flex-col md:flex-row h-full">
            {/* Left Col - Info */}
            <div className="w-full md:w-2/5 bg-[#0a0a0a] p-8 md:p-10 border-r border-gray-900">
              <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2">Reservation</h3>
              <h2 className="text-3xl font-serif mb-6">{room.room_type}</h2>
              <img src={room.image_url} alt="Room" className="w-full aspect-video object-cover mb-6 border border-gray-800" />
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Rate per night</span>
                  <span className="text-white font-medium">{formatNGN(room.price)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Max Capacity</span>
                  <span className="text-white font-medium">{room.capacity} Guests</span>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-5 border border-gray-800 rounded-sm shadow-inner">
                <h4 className="font-serif text-lg mb-4 text-gold border-b border-gray-800 pb-2">Booking Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Room Name</span>
                    <span className="text-white text-right max-w-[150px] truncate" title={room.room_type}>{room.room_type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Room Number</span>
                    <span className="text-white">{room.room_number}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Price Per Night</span>
                    <span className="text-white">{formatNGN(room.price)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Number of Nights</span>
                    <span className="text-white">{calcDetails.nights}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-800 font-semibold text-lg text-gold">
                    <span>Total Amount</span>
                    <span>{formatNGN(calcDetails.total)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-10">
              <h3 className="text-2xl font-serif mb-8">Guest Details</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">First Name</label>
                    <input required type="text" name="firstName" onChange={handleChange} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Last Name</label>
                    <input required type="text" name="lastName" onChange={handleChange} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Email Address</label>
                    <input required type="email" name="email" onChange={handleChange} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Phone Number</label>
                    <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Check-in Date</label>
                    <input required type="date" name="checkIn" onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Check-out Date</label>
                    <input required type="date" name="checkOut" onChange={handleChange} min={formData.checkIn || new Date().toISOString().split('T')[0]} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors [color-scheme:dark]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-500 mb-2">Number of Guests</label>
                  <select name="guests" onChange={handleChange} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors appearance-none">
                    {[...Array(room.capacity)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1} Guest{i > 0 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-500 mb-2">Special Requests (Optional)</label>
                  <textarea name="requests" onChange={handleChange} rows="3" className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-gold text-black py-4 font-semibold tracking-wider hover:bg-white transition-colors mt-4">
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        )}

        {step === 2 && bookingData && (
          <PaymentStep bookingData={bookingData} onConfirm={onConfirmPayment} />
        )}

        {step === 3 && bookingData && (
          <ConfirmationStep bookingData={bookingData} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

// Payment View Internal Component
function PaymentStep({ bookingData, onConfirm }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 md:p-12 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
        <Lock size={32} />
      </div>
      <h2 className="text-3xl font-serif mb-2">Secure Payment</h2>
      <p className="text-neutral-400 mb-6">Please complete your transfer to secure the reservation.</p>

      <div className="bg-[#1a1a1a] border border-gray-800 rounded-sm p-5 mb-6 text-left">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-800">
          <span className="text-neutral-400 text-sm">Booking Reference:</span>
          <span className="font-mono text-gold text-lg tracking-wider">{bookingData.ref}</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-500">Room</span>
            <span className="text-white">{bookingData.room.room_type} (Rm {bookingData.room.room_number})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Duration</span>
            <span className="text-white">{bookingData.nights} Night(s)</span>
          </div>
          <div className="flex justify-between font-semibold pt-2">
            <span className="text-neutral-300">Total Amount</span>
            <span className="text-gold text-lg">{formatNGN(bookingData.total)}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#111] border border-gold/30 rounded-sm p-6 text-left mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
        <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Bank Transfer Details</h4>
        
        <div className="space-y-6 relative z-10">
          <div>
            <p className="text-sm text-neutral-400 mb-1">Bank Name</p>
            <p className="text-lg text-white font-medium">OPay</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-1">Account Number</p>
            <div className="flex items-center gap-4">
              <p className="text-3xl font-mono text-gold tracking-widest">9012758772</p>
              <button 
                onClick={() => copyToClipboard('9012758772')} 
                className={`flex items-center gap-2 border px-3 py-1.5 rounded-sm text-xs transition-all duration-300 ${copied ? 'bg-green-500/20 text-green-500 border-green-500/50' : 'bg-[#1a1a1a] text-neutral-300 border-gray-800 hover:text-white hover:border-gold'}`}
                title="Copy Account Number"
              >
                {copied ? <CheckCircle size={14} /> : <Copy size={14} />} 
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-1">Account Name</p>
            <p className="text-lg text-white font-medium uppercase">Adewale Fadipe</p>
          </div>
        </div>
      </div>

      <button 
        onClick={onConfirm}
        className="w-full bg-gold text-black py-4 font-semibold tracking-wider hover:bg-white transition-colors uppercase"
      >
        I Have Made Payment
      </button>
    </div>
  );
}

// Confirmation View Internal Component
function ConfirmationStep({ bookingData, onClose }) {
  return (
    <div className="p-8 md:p-12 text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-[scaleIn_0.5s_ease-out]">
        <CheckCircle size={40} />
      </div>
      <h2 className="text-3xl font-serif mb-4 text-white">Thank You, {bookingData.firstName}!</h2>
      <p className="text-neutral-400 mb-6 max-w-md mx-auto leading-relaxed">
        Your payment is currently <strong className="text-gold font-normal">Pending Verification</strong>.
      </p>

      <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-sm mb-6 text-left max-w-md mx-auto shadow-inner">
        <div className="text-center">
          <p className="text-xs uppercase text-neutral-500 mb-2">Booking Reference Number</p>
          <p className="text-2xl font-mono text-gold tracking-widest bg-black/50 py-2 rounded-sm border border-gold/20">{bookingData.ref}</p>
        </div>
      </div>

      <div className="bg-gold/10 border border-gold/20 p-6 rounded-sm mb-8 max-w-md mx-auto text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
        <h4 className="text-gold font-semibold mb-2 flex items-center gap-2"><Bell size={18} /> Next Step Required</h4>
        <p className="text-sm text-neutral-300 leading-relaxed">
          To complete your reservation process, please contact our receptionist immediately with your <span className="text-white font-mono">Booking Reference Number</span> to confirm your payment and secure your room.
        </p>
      </div>

      <div className="space-y-4 max-w-md mx-auto">
        <div className="flex flex-col gap-3">
          <a href="https://wa.me/2349012758772" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] py-3 text-sm hover:bg-[#25D366] hover:text-black transition-all duration-300 font-medium border border-[#25D366]/30 hover:border-[#25D366]">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
             Confirm via WhatsApp
          </a>
          <a href="tel:+2349012758772" className="flex items-center justify-center gap-2 border border-gray-800 py-3 text-sm text-neutral-300 hover:border-gold hover:text-gold transition-colors">
            <Phone size={16} /> Call Reception (+234 901 275 8772)
          </a>
        </div>
      </div>

      <button 
        onClick={onClose}
        className="mt-10 underline text-sm text-neutral-500 hover:text-white transition-colors"
      >
        Return to Home
      </button>
    </div>
  );
}

// --- CONTACT PAGE COMPONENT ---
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to database here
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">We are at your service. Reach out for reservations, special requests, or any inquiries regarding your luxury experience.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-[#111] border border-gray-900 rounded-sm overflow-hidden animate-[slideUp_1s_ease-out_0.2s_both]">
          {/* Info Side */}
          <div className="w-full lg:w-1/3 bg-[#050505] p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-transparent" />
            <h3 className="text-2xl font-serif mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-white mb-1">Location</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">Ukpabi Asika Road,<br/>Off Fate Rd, Oko Erin,<br/>Kwara</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-white mb-1">Phone</h4>
                  <p className="text-neutral-400 text-sm">+234 800 MILLENNIUM</p>
                  <p className="text-neutral-400 text-sm">+234 901 275 8772</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-white mb-1">Email</h4>
                  <p className="text-neutral-400 text-sm">info@millenniumnicepeak.com</p>
                  <p className="text-neutral-400 text-sm">reservations@millenniumnicepeak.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-white mb-1">Business Hours</h4>
                  <p className="text-neutral-400 text-sm">Reception: 24/7</p>
                  <p className="text-neutral-400 text-sm">Check-in: 2:00 PM</p>
                  <p className="text-neutral-400 text-sm">Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-900">
              <h4 className="font-serif text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-sm flex items-center justify-center hover:bg-gold hover:text-black transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-sm flex items-center justify-center hover:bg-gold hover:text-black transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-sm flex items-center justify-center hover:bg-gold hover:text-black transition-colors"><Twitter size={18} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 p-10">
            <h3 className="text-2xl font-serif mb-8 text-white">Send a Message</h3>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 text-gold">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-serif mb-2">Message Sent Successfully</h4>
                <p className="text-neutral-400">Our concierge team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Full Name</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Email Address</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-neutral-500 mb-2">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors appearance-none">
                      <option value="">Select a subject</option>
                      <option value="Reservation">Reservation Inquiry</option>
                      <option value="Event">Event Booking</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-500 mb-2">Message</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="5" className="w-full bg-[#1a1a1a] border border-gray-800 px-4 py-3 text-sm text-white focus:border-gold outline-none transition-colors resize-none"></textarea>
                </div>
                
                <button type="submit" className="bg-gold text-black px-10 py-4 font-semibold tracking-wide hover:bg-white transition-colors rounded-sm inline-flex items-center gap-2 group">
                  Send Message <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Full width Map */}
        <div className="mt-16 h-[400px] border border-gray-900 rounded-sm overflow-hidden animate-[fadeIn_1s_ease-out_0.4s_both]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0694116480577!2d4.587811874415843!3d8.493861391546747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d0f1ef4518f%3A0x758a75877d382686!2sMillennium%20Nice%20Peak%20Hotel!5e0!3m2!1sen!2sng!4v1718338782352!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location Large"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// --- ADMIN DASHBOARD COMPONENT ---
function AdminDashboard({ bookings, rooms }) {
  const [activeTab, setActiveTab] = useState('bookings');
  
  // Local state to simulate admin updates
  const [localBookings, setLocalBookings] = useState(bookings);

  // Sync initial bookings
  useEffect(() => {
    setLocalBookings(bookings);
  }, [bookings]);

  const totalRevenue = localBookings.reduce((acc, curr) => acc + curr.total, 0);

  const updateStatus = (id, newStatus) => {
    setLocalBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-900 pb-6">
          <div>
            <h1 className="text-3xl font-serif text-white mb-2 flex items-center gap-3">
              <Lock className="text-gold" /> Admin Management
            </h1>
            <p className="text-neutral-500 text-sm">Secure Portal - Millennium Nice Peak Hotel</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 text-sm uppercase tracking-wider ${activeTab === 'bookings' ? 'bg-gold text-black font-semibold' : 'text-neutral-400 hover:text-white'}`}
            >
              Bookings
            </button>
            <button 
              onClick={() => setActiveTab('rooms')}
              className={`px-4 py-2 text-sm uppercase tracking-wider ${activeTab === 'rooms' ? 'bg-gold text-black font-semibold' : 'text-neutral-400 hover:text-white'}`}
            >
              Rooms Inventory
            </button>
          </div>
        </div>

        {activeTab === 'bookings' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#111] border border-gray-900 p-6 rounded-sm border-l-2 border-l-gold">
                <p className="text-xs uppercase text-neutral-500 mb-2">Total Bookings</p>
                <p className="text-3xl font-serif text-white">{localBookings.length}</p>
              </div>
              <div className="bg-[#111] border border-gray-900 p-6 rounded-sm border-l-2 border-l-green-500">
                <p className="text-xs uppercase text-neutral-500 mb-2">Revenue (NGN)</p>
                <p className="text-3xl font-serif text-white">{formatNGN(totalRevenue)}</p>
              </div>
              <div className="bg-[#111] border border-gray-900 p-6 rounded-sm border-l-2 border-l-blue-500">
                <p className="text-xs uppercase text-neutral-500 mb-2">Pending Verifications</p>
                <p className="text-3xl font-serif text-white">{localBookings.filter(b => b.status === 'Pending Verification').length}</p>
              </div>
            </div>

            {/* Table */}
            <div className="bg-[#111] border border-gray-900 rounded-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a1a1a] text-xs uppercase tracking-widest text-neutral-400 border-b border-gray-800">
                    <th className="p-4 font-medium">Ref ID</th>
                    <th className="p-4 font-medium">Guest</th>
                    <th className="p-4 font-medium">Room</th>
                    <th className="p-4 font-medium">Dates</th>
                    <th className="p-4 font-medium">Amount</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {localBookings.length === 0 ? (
                    <tr><td colSpan="7" className="p-8 text-center text-neutral-500">No bookings found in the system.</td></tr>
                  ) : (
                    localBookings.map((b, i) => (
                      <tr key={i} className="border-b border-gray-800/50 hover:bg-[#151515] transition-colors text-sm">
                        <td className="p-4 font-mono text-gold">{b.ref}</td>
                        <td className="p-4">
                          <div className="font-medium text-white">{b.firstName} {b.lastName}</div>
                          <div className="text-xs text-neutral-500">{b.email}</div>
                        </td>
                        <td className="p-4 text-neutral-300">{b.room.room_type} <span className="text-xs block text-neutral-500">Rm {b.room.room_number}</span></td>
                        <td className="p-4 text-neutral-400">
                          {formatDate(b.checkIn)}<br/>
                          {formatDate(b.checkOut)}
                        </td>
                        <td className="p-4 text-white font-medium">{formatNGN(b.total)}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 text-xs rounded-sm border ${
                            b.status === 'Verified' ? 'border-green-500/30 text-green-500 bg-green-500/10' : 
                            b.status === 'Rejected' ? 'border-red-500/30 text-red-500 bg-red-500/10' : 
                            'border-yellow-500/30 text-yellow-500 bg-yellow-500/10'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="p-4">
                          {b.status === 'Pending Verification' && (
                            <div className="flex gap-2">
                              <button onClick={() => updateStatus(b.id, 'Verified')} className="text-xs bg-green-500/20 text-green-500 hover:bg-green-500 hover:text-white px-2 py-1 transition-colors rounded-sm">Approve</button>
                              <button onClick={() => updateStatus(b.id, 'Rejected')} className="text-xs bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white px-2 py-1 transition-colors rounded-sm">Reject</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'rooms' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-[#111] border border-gray-900 rounded-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a1a1a] text-xs uppercase tracking-widest text-neutral-400 border-b border-gray-800">
                    <th className="p-4 font-medium">Room #</th>
                    <th className="p-4 font-medium">Type</th>
                    <th className="p-4 font-medium">Price (NGN)</th>
                    <th className="p-4 font-medium">Capacity</th>
                    <th className="p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((r, i) => (
                    <tr key={r.id} className="border-b border-gray-800/50 hover:bg-[#151515] transition-colors text-sm">
                      <td className="p-4 font-mono text-white">{r.room_number}</td>
                      <td className="p-4 text-neutral-300">{r.room_type}</td>
                      <td className="p-4 text-gold">{formatNGN(r.price)}</td>
                      <td className="p-4 text-neutral-400">{r.capacity} Persons</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs rounded-sm ${r.status === 'Available' ? 'text-green-500' : 'text-neutral-500'}`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const supabaseClient = supabase.createClient(
  "https://mpuqiptrfonxbtrhtnmn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdXFpcHRyZm9ueGJ0cmh0bm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NzI2MjgsImV4cCI6MjA5NzA0ODYyOH0.oOcK7u-xlwyBhTCWiveIFJxZorp8YY3f82tcOjOWg7U"
);
</script>
