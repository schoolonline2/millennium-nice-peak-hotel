import React, { useState, useEffect } from 'react';
import { 
  Wifi, Utensils, Waves, Briefcase, Car, Bell, Wind, ShieldCheck, 
  Shirt, Plane, ChevronRight, Menu, X, Lock, Instagram, 
  Facebook, Twitter, MapPin, Phone, Mail
} from 'lucide-react';

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

const generateRooms = () => {
  let rooms = [];
  let idCounter = 1;
  ROOM_CATEGORIES.forEach((cat, index) => {
    const count = index < 2 ? 5 : index < 4 ? 8 : index < 6 ? 5 : 2;
    for (let i = 0; i < count; i++) {
      rooms.push({
        id: `RM-${1000 + idCounter}`,
        room_number: `${index + 1}0${i + 1}`,
        room_type: cat.name,
        image_url: cat.img,
        price: Math.floor(Math.random() * ((cat.max - cat.min) / 1000)) * 1000 + cat.min
      });
      idCounter++;
    }
  });
  return rooms;
};

export default function App() {
  const [rooms] = useState(generateRooms());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">MILLENNIUM<span className="text-gold">.</span></div>
          <div className="hidden md:flex space-x-1">
            <button className="px-6 py-4 hover:text-gold">Home</button>
            <button className="px-6 py-4 hover:text-gold">Rooms</button>
            <button className="px-6 py-4 hover:text-gold">Contact</button>
            <button className="bg-gold text-black px-6 py-4 font-semibold">Book Now</button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-5xl font-serif mb-12">Luxury Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.slice(0, 6).map(room => (
            <div key={room.id} className="bg-[#1a1a1a] p-4 rounded-sm">
              <img src={room.image_url} alt={room.room_type} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-serif">{room.room_type}</h3>
              <p className="text-gold mt-2">₦{room.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}