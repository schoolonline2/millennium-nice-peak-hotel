import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Event Centre", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal bg-white">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          isScrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3 text-charcoal"
            : "bg-transparent py-5 text-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Millennium</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-80">Nice Peak Hotel</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold relative block",
                  location.pathname === link.path && !isHome ? "text-gold" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/rooms"
              className="bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded-sm font-medium transition-colors transform hover:scale-[1.02]"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col pt-2 pb-6 px-4 md:hidden border-t border-gray-100 text-charcoal">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-3 px-2 border-b border-gray-50 text-base font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/rooms"
              className="mt-6 bg-royal text-white text-center py-3 rounded-sm font-medium mx-2"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-royal text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex flex-col mb-6">
                <span className="font-serif text-3xl font-bold tracking-tight text-white">Millennium</span>
                <span className="text-xs uppercase tracking-widest font-medium text-gold">Nice Peak Hotel</span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Experience Luxury, Comfort, and Exceptional Hospitality in the Heart of Ilorin.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">In</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">Fb</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">Tw</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6 text-white font-medium">Quick Links</h3>
              <ul className="space-y-3">
                {links.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6 text-white font-medium">Our Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Luxury Accommodation</li>
                <li>Premium Restaurant</li>
                <li>Event & Conference Halls</li>
                <li>Swimming Pool</li>
                <li>24/7 Room Service</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6 text-white font-medium">Contact Us</h3>
              <address className="not-italic text-gray-300 text-sm space-y-3">
                <p>123 Hotel Avenue, GRA</p>
                <p>Ilorin, Kwara State, Nigeria</p>
                <p className="pt-2 hover:text-white transition-colors"><a href="tel:+2341234567890">+234 (0) 123 456 7890</a></p>
                <p className="hover:text-white transition-colors"><a href="mailto:info@millenniumnicepeak.com">info@millenniumnicepeak.com</a></p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Millennium Nice Peak Hotel. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/2341234567890" // Dummy WA link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:+2341234567890"
          className="bg-gold text-white p-4 rounded-full shadow-xl hover:bg-gold-hover hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold flex items-center justify-center"
          aria-label="Call Us"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
