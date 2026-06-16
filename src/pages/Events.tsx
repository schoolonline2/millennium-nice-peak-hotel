import { motion } from "motion/react";
import { halls, hotelImages } from "../data/mockData";
import { Users, Info, ShieldCheck, Video, CalendarCheck } from "lucide-react";

export default function Events() {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[40vh] w-full mb-16">
        <div className="absolute inset-0 bg-charcoal/50 z-10" />
        <img src={hotelImages.eventHall} alt="Event Centre" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Event Centre</h1>
          <p className="text-gray-200 max-w-2xl text-lg font-light">Host unforgettable weddings, conferences, and celebrations in our luxurious spaces.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center text-royal">
          <div className="border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
             <Video size={32} className="mx-auto text-gold mb-4" />
             <h3 className="font-serif text-xl mb-2">Modern A/V Tech</h3>
             <p className="text-gray-500 text-sm">State-of-the-art sound systems and projectors for your presentations.</p>
          </div>
          <div className="border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
             <ShieldCheck size={32} className="mx-auto text-gold mb-4" />
             <h3 className="font-serif text-xl mb-2">Dedicated Event Staff</h3>
             <p className="text-gray-500 text-sm">From planners to catering, our team ensures everything runs smoothly.</p>
          </div>
          <div className="border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
             <CalendarCheck size={32} className="mx-auto text-gold mb-4" />
             <h3 className="font-serif text-xl mb-2">Flexible Layouts</h3>
             <p className="text-gray-500 text-sm">Rooms arrangeable for banquets, theatres, or classrooms.</p>
          </div>
        </div>

        {/* Halls */}
        <div className="space-y-16">
          {halls.map((hall, idx) => (
            <motion.div 
              key={hall.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-sm relative group">
                <img src={hall.image} alt={hall.name} className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2">
                 <h2 className="font-serif text-3xl md:text-4xl text-royal mb-4">{hall.name}</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   {hall.description}
                 </p>
                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-soft-gray p-4 rounded-sm">
                      <span className="block text-xs uppercase text-gray-500 mb-1 font-bold">Capacity</span>
                      <span className="flex items-center gap-2 text-royal font-medium"><Users size={18} className="text-gold"/> {hall.capacity} Guests</span>
                    </div>
                    <div className="bg-soft-gray p-4 rounded-sm">
                      <span className="block text-xs uppercase text-gray-500 mb-1 font-bold">Pricing</span>
                      <span className="flex items-center gap-2 text-royal font-medium"><Info size={18} className="text-gold"/> {hall.price}</span>
                    </div>
                 </div>
                 <button className="bg-royal text-white px-8 py-3 rounded-sm font-medium hover:bg-royal/90 transition-colors uppercase tracking-wider text-sm">
                    Inquire Availability
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
