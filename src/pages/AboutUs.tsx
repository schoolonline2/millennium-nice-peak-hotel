import { hotelImages } from "../data/mockData";
import { Star, Award, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <h1 className="font-serif text-4xl md:text-5xl text-royal mb-6">Our Legacy of Luxury</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded on the principles of unparalleled comfort and exceptional Nigerian hospitality, Millennium Nice Peak Hotel stands as a beacon of luxury in Ilorin. For over a decade, we have redefined the standard for premium accommodation in Kwara State.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are visiting for business, a grand celebration, or a relaxing weekend getaway, our dedicated team is committed to anticipating your every need and ensuring a memorable stay that exceeds expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div>
                  <h4 className="font-serif text-3xl text-gold mb-1">10+</h4>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-bold">Years of Excellence</span>
               </div>
               <div>
                  <h4 className="font-serif text-3xl text-gold mb-1">50+</h4>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-bold">Professional Staff</span>
               </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-royal/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
             <img src={hotelImages.exteriorDay} alt="Hotel Exterior" className="w-full h-[500px] object-cover rounded-sm shadow-xl relative z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-soft-gray p-12 md:p-16 rounded-sm mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="flex flex-col items-start">
              <div className="p-3 bg-white rounded-full shadow-sm mb-6 inline-block">
                <Heart size={32} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-royal mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide an oasis of comfort and a standard of service that consistently delights our guests, fostering an environment where every interaction is memorable and every stay is exceptional.
              </p>
           </div>
           <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-12">
              <div className="p-3 bg-white rounded-full shadow-sm mb-6 inline-block">
                <Award size={32} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-royal mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier hotel destination in Nigeria, globally recognized for merging modern luxury with the rich warmth of authentic African hospitality.
              </p>
           </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-3 block">Why Us</span>
          <h2 className="font-serif text-3xl md:text-4xl text-royal mb-12">The Millennium Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Prime Location", desc: "Situated safely and conveniently in the heart of Ilorin." },
               { title: "Exquisite Dining", desc: "A culinary journey featuring local and international options." },
               { title: "Premium Amenities", desc: "From fast WiFi to a pristine pool, everything you need." }
             ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm flex flex-col items-center">
                   <CheckCircle2 size={32} className="text-royal mb-4" />
                   <h4 className="font-serif text-xl mb-3 text-charcoal">{item.title}</h4>
                   <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>

        {/* Testimonials (Static representation to save space) */}
        <div className="bg-royal text-white rounded-sm p-12 md:p-16 text-center">
           <Star size={40} className="text-gold mx-auto mb-6" />
           <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 max-w-3xl mx-auto italic">
             "My stay at Millennium Nice Peak was absolutely fantastic. The staff went above and beyond, the room was immaculate, and the food was incredible. Highly recommended!"
           </p>
           <div className="font-medium tracking-wider uppercase text-sm">
             — Dr. Adebayo O., Verified Guest
           </div>
        </div>
      </div>
    </div>
  );
}
