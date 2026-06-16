import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-24 bg-soft-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-royal mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to assist you. Reach out to our dedicated team for reservations, event inquiries, or any other assistance you may require.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-sm shadow-md">
           {/* Contact Information */}
           <div>
              <h2 className="font-serif text-3xl text-royal mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full text-gold">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="font-medium text-lg text-charcoal mb-1">Our Location</h4>
                       <p className="text-gray-500 text-sm">123 Hotel Avenue, GRA<br/>Ilorin, Kwara State, Nigeria</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full text-gold">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="font-medium text-lg text-charcoal mb-1">Phone & WhatsApp</h4>
                       <p className="text-gray-500 text-sm">+234 (0) 123 456 7890<br/>+234 (0) 098 765 4321</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full text-gold">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="font-medium text-lg text-charcoal mb-1">Email Addresses</h4>
                       <p className="text-gray-500 text-sm">reservations@millenniumnicepeak.com<br/>info@millenniumnicepeak.com</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full text-gold">
                       <Clock size={24} />
                    </div>
                    <div>
                       <h4 className="font-medium text-lg text-charcoal mb-1">Operating Hours</h4>
                       <p className="text-gray-500 text-sm">Reception & Room Service: 24/7<br/>Restaurant: 6:00 AM - 11:00 PM</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Contact Form */}
           <div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                       <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded-sm outline-none focus:border-royal transition-colors" placeholder="John" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                       <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded-sm outline-none focus:border-royal transition-colors" placeholder="Doe" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full border border-gray-300 px-4 py-3 rounded-sm outline-none focus:border-royal transition-colors" placeholder="john@example.com" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full border border-gray-300 px-4 py-3 rounded-sm outline-none focus:border-royal transition-colors">
                       <option>Room Reservation</option>
                       <option>Event Enquiry</option>
                       <option>Restaurant Booking</option>
                       <option>General Feedback</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={5} className="w-full border border-gray-300 px-4 py-3 rounded-sm outline-none focus:border-royal transition-colors resize-none" placeholder="How can we help you?"></textarea>
                 </div>
                 <button className="w-full bg-royal text-white font-medium py-4 rounded-sm hover:bg-royal/90 transition-colors uppercase tracking-wider text-sm shadow-md">
                    Send Message
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
