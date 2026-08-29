"use client";

import { motion } from "framer-motion";
import { Check, Wifi, Tv, Wind, Coffee } from "lucide-react";
import Link from "next/link";

const roomsData = [
  {
    id: "premium-double",
    name: "Premium Double Room",
    description: "A beautifully appointed room offering a comfortable double bed, plush interiors, and modern amenities designed for relaxation.",
    image: "/assets/WhatsApp Image 2026-08-27 at 12.35.20.jpeg",
    features: ["AC & Non-AC Available", "Attached Bath", "Running Hot/Cold Water", "Intercom Telephone", "Room Service"],
  },
  {
    id: "spacious-triple",
    name: "Spacious Triple Room",
    description: "Ideal for families or small groups, this room provides ample space with three single beds and a welcoming atmosphere.",
    image: "/assets/WhatsApp Image 2026-08-27 at 12.35.21.jpeg",
    features: ["3 Comfortable Beds", "Cable TV", "Room Service", "Attached Bath", "Daily Housekeeping"],
  },
  {
    id: "comfort-twin",
    name: "Comfort Twin Room",
    description: "Perfect for friends or colleagues, featuring twin beds, elegant decor, and all the essential amenities for a pleasant stay.",
    image: "/assets/WhatsApp Image 2026-08-27 at 12.35.23 (1).jpeg",
    features: ["Twin Beds", "AC", "Running Hot/Cold Water", "Cable TV", "Room Service"],
  }
];

export default function Rooms() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-16 bg-white">
      {/* Header */}
      <section className="bg-[var(--color-brown-dark)] text-white py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-widest mb-4"
        >
          OUR ROOMS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[var(--color-cream)] max-w-2xl mx-auto text-lg"
        >
          Discover your perfect sanctuary of rest and relaxation.
        </motion.p>
      </section>

      {/* Rooms List */}
      <section className="py-20 px-4 container mx-auto">
        <div className="flex flex-col gap-24">
          {roomsData.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 h-[500px] overflow-hidden rounded-sm shadow-xl relative group">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl text-[var(--color-secondary)] mb-4">{room.name}</h2>
                <p className="text-[var(--color-brown-light)] text-lg mb-8 leading-relaxed">
                  {room.description}
                </p>
                
                <div className="mb-10">
                  <h3 className="text-sm tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4 font-semibold">Room Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[var(--color-secondary)]">
                        <Check size={16} className="text-[var(--color-accent)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[var(--color-accent)] transition-colors duration-300 w-fit"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
