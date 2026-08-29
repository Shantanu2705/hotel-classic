import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brown-dark)] text-[var(--color-primary)] pt-16 pb-8 border-t border-[var(--color-brown-light)]/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-widest text-[var(--color-accent)]">
              HOTEL CLASSIC
            </h2>
            <p className="text-[var(--color-cream)]/70 text-sm leading-relaxed max-w-sm">
              Experience the perfect blend of modern comfort and timeless luxury. Your unforgettable stay begins here.
            </p>
            <div className="flex gap-4 mt-4 text-[var(--color-accent)]">
              <a href="#" className="hover:text-white transition-colors font-medium">Instagram</a>
              <a href="#" className="hover:text-white transition-colors font-medium">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Explore</h3>
            <nav className="flex flex-col gap-3 text-[var(--color-cream)]/80 text-sm">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About Us</Link>
              <Link href="/rooms" className="hover:text-[var(--color-accent)] transition-colors">Our Rooms</Link>
              <Link href="/gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link>
              <Link href="/facilities" className="hover:text-[var(--color-accent)] transition-colors">Facilities</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <div className="flex flex-col gap-4 text-[var(--color-cream)]/80 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-[var(--color-accent)] shrink-0 mt-1" size={18} />
                <p>NJP Main Road, Near Netaji More,<br />Siliguri</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[var(--color-accent)] shrink-0" size={18} />
                <p>+91 12345 67890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[var(--color-accent)] shrink-0" size={18} />
                <p>reservations@hotelclassic.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-brown-light)]/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-cream)]/50">
          <p>&copy; {new Date().getFullYear()} Hotel Classic. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for luxury.</p>
        </div>
      </div>
    </footer>
  );
}
