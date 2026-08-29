"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.25 (1).jpeg", category: "Exterior", alt: "Hotel Exterior" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.20 (1).jpeg", category: "Rooms", alt: "Double Room" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.20 (2).jpeg", category: "Rooms", alt: "Double Room" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.20.jpeg", category: "Rooms", alt: "Double Room" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.21 (1).jpeg", category: "Rooms", alt: "Triple Room" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.21.jpeg", category: "Rooms", alt: "Triple Room" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.23 (1).jpeg", category: "Rooms", alt: "Twin Room" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.21 (2).jpeg", category: "Bathrooms", alt: "Bathroom" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.22 (1).jpeg", category: "Bathrooms", alt: "Bathroom" },
  { src: "/assets/WhatsApp Image 2026-08-27 at 12.35.22 (2).jpeg", category: "Bathrooms", alt: "Bathroom" },
];

const categories = ["All", "Exterior", "Rooms", "Bathrooms"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-16 bg-[var(--color-cream)]">
      {/* Header */}
      <section className="bg-[var(--color-brown-dark)] text-white py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-widest mb-4"
        >
          GALLERY
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[var(--color-cream)] max-w-2xl mx-auto text-lg"
        >
          A visual journey through Hotel Classic.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 container mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full uppercase tracking-wider text-sm transition-colors duration-300 ${
                activeCategory === category 
                  ? "bg-[var(--color-secondary)] text-white" 
                  : "bg-white text-[var(--color-secondary)] hover:bg-[var(--color-accent)] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden group rounded-sm shadow-md h-64 md:h-80"
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white tracking-widest uppercase text-sm border border-white px-4 py-2">View</span>
                </div>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
