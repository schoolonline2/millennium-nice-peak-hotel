import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { hotelImages } from "../data/mockData";
import { X } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, category: "exterior", image: hotelImages.exteriorDay },
    { id: 2, category: "exterior", image: hotelImages.exteriorNight },
    { id: 3, category: "rooms", image: hotelImages.luxuryRoom },
    { id: 4, category: "rooms", image: hotelImages.executiveSuite },
    { id: 5, category: "rooms", image: hotelImages.deluxeBed },
    { id: 6, category: "reception", image: hotelImages.reception },
    { id: 7, category: "pool", image: hotelImages.pool },
    { id: 8, category: "restaurant", image: hotelImages.restaurant },
    { id: 9, category: "events", image: hotelImages.eventHall },
    { id: 10, category: "exterior", image: hotelImages.rooftop },
  ];

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-royal mb-6">Our Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the beauty and elegance of Millennium Nice Peak Hotel through our curated visual collection.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {["all", "exterior", "rooms", "restaurant", "events", "pool", "reception"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors uppercase tracking-wider ${
                filter === cat ? "bg-royal text-white" : "bg-soft-gray text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm h-[300px]"
                onClick={() => setLightboxImg(item.image)}
              >
                <img
                  src={item.image}
                  alt={`Gallery ${item.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif text-xl tracking-wider uppercase">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setLightboxImg(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImg}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
