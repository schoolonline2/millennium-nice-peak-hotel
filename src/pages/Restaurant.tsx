import { motion } from "motion/react";
import { hotelImages } from "../data/mockData";
import { Coffee, Utensils, Wine, Clock } from "lucide-react";

export default function Restaurant() {
  return (
    <div className="pt-24 pb-24 bg-soft-gray min-h-screen">
      {/* Restaurant Header */}
      <div className="relative h-[50vh] w-full mb-16">
        <div className="absolute inset-0 bg-charcoal/60 z-10" />
        <img src={hotelImages.restaurant} alt="Restaurant" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <Utensils size={48} className="text-gold mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">The Royal Dining</h1>
          <p className="text-gray-200 max-w-2xl text-lg font-light">Savor culinary masterpieces crafted by our world-class chefs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center bg-white p-8 md:p-12 shadow-md rounded-sm -mt-32 relative z-30">
          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0">
             <Coffee size={32} className="text-royal mb-4" />
             <h3 className="font-serif text-xl mb-2">Breakfast</h3>
             <p className="text-gray-500 text-sm mb-2">Continental & Nigerian Buffet</p>
             <span className="font-mono text-gold text-sm">6:00 AM - 10:30 AM</span>
          </div>
          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 py-8 md:py-0">
             <Utensils size={32} className="text-royal mb-4" />
             <h3 className="font-serif text-xl mb-2">Lunch & Dinner</h3>
             <p className="text-gray-500 text-sm mb-2">A la Carte & Chef Specials</p>
             <span className="font-mono text-gold text-sm">12:30 PM - 11:00 PM</span>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
             <Wine size={32} className="text-royal mb-4" />
             <h3 className="font-serif text-xl mb-2">Lounge & Bar</h3>
             <p className="text-gray-500 text-sm mb-2">Premium Wines & Cocktails</p>
             <span className="font-mono text-gold text-sm">10:00 AM - 2:00 AM</span>
          </div>
        </div>

        {/* Featured Menu Elements */}
        <div className="bg-white rounded-sm shadow-md p-8 md:p-16 mb-20">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-3 block">Our Menu</span>
            <h2 className="font-serif text-3xl md:text-4xl text-royal">Culinary Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-charcoal border-b border-gray-100 pb-4">Starters & Soups</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-gray-50 pb-2">
                  <div>
                    <h4 className="font-medium text-lg text-royal">Spicy Pepper Soup</h4>
                    <p className="text-sm text-gray-500">Goat meat or assorted fish with local spices.</p>
                  </div>
                  <span className="text-gold font-medium">₦4,500</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-50 pb-2">
                  <div>
                    <h4 className="font-medium text-lg text-royal">Crispy Calamari</h4>
                    <p className="text-sm text-gray-500">Served with garlic mayo and lemon wedge.</p>
                  </div>
                  <span className="text-gold font-medium">₦6,000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-6 text-charcoal border-b border-gray-100 pb-4">Main Course</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-gray-50 pb-2">
                  <div>
                    <h4 className="font-medium text-lg text-royal">Ofada Rice Special</h4>
                    <p className="text-sm text-gray-500">Traditional Ofada rice with assorted meat designer stew.</p>
                  </div>
                  <span className="text-gold font-medium">₦8,500</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-50 pb-2">
                  <div>
                    <h4 className="font-medium text-lg text-royal">Grilled Salmon</h4>
                    <p className="text-sm text-gray-500">Norwegian salmon with asparagus and hollandaise sauce.</p>
                  </div>
                  <span className="text-gold font-medium">₦15,000</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <button className="bg-royal text-white px-8 py-3 rounded-sm font-medium hover:bg-royal/90 transition-colors uppercase tracking-wider text-sm">
               Download Full Menu
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
