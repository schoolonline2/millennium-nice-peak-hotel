import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { rooms } from "../data/mockData";
import { Star, Users, CalendarDays, Filter } from "lucide-react";
import { useState } from "react";

export default function Rooms() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="pt-24 pb-24 bg-soft-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-royal mb-4">Our Accommodations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a world of comfort. Each of our rooms and suites is designed with your luxury in mind, blending contemporary elegance with traditional warmth.
          </p>
        </div>

        {/* Filters (Simulated) */}
        <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-gray-200 pb-6">
           <Filter size={20} className="text-gray-400" />
           <button onClick={() => setFilter("all")} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${filter === "all" ? "bg-royal text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>All Rooms</button>
           <button onClick={() => setFilter("standard")} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${filter === "standard" ? "bg-royal text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>Standard & Deluxe</button>
           <button onClick={() => setFilter("suite")} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${filter === "suite" ? "bg-royal text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>Suites</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-sm overflow-hidden shadow-md flex flex-col md:flex-row group"
            >
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="font-serif text-2xl text-royal">
                        <span className="text-gold mr-2 text-xl tracking-widest font-bold">#{room.roomNumber}</span>
                        {room.name}
                     </h3>
                  </div>
                  <div className="flex items-center gap-1 text-gold mb-4">
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <span className="text-xs text-charcoal font-medium ml-1">({room.rating})</span>
                  </div>
                  <p className="text-gray-600 pl-0 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1"><Users size={16} /> {room.capacity} Guests</span>
                    <span className="flex items-center gap-1"><CalendarDays size={16} /> {room.size}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map(amenity => (
                      <span key={amenity} className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-600">{amenity}</span>
                    ))}
                    {room.amenities.length > 3 && <span className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-600">+{room.amenities.length - 3} more</span>}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                   <div className="text-lg font-bold text-royal">
                      ₦{room.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">/ night</span>
                   </div>
                   <Link to={`/rooms`} className="bg-gold text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-gold-hover transition-colors">
                     Reserve
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
