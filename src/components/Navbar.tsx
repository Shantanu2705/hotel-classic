"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--color-primary)]/80 backdrop-blur-xl border-b border-[var(--color-secondary)]/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="/">
            <h1
              className={`text-2xl font-bold tracking-widest transition-colors ${
                !scrolled && pathname !== "/" ? "text-white drop-shadow-md" : "text-[var(--color-secondary)]"
              }`}
            >
              HOTEL CLASSIC
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isLightText = !scrolled && pathname !== "/";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-[var(--color-accent)] font-semibold"
                      : isLightText
                      ? "text-white/90 hover:text-white drop-shadow-sm"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${
              !scrolled && pathname !== "/" ? "text-white" : "text-[var(--color-secondary)]"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-primary)] flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl tracking-widest uppercase ${
                    pathname === link.href
                      ? "text-[var(--color-accent)] font-semibold"
                      : "text-[var(--color-secondary)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
