"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-[var(--color-brown-dark)] text-white py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-widest mb-4"
        >
          OUR STORY
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[var(--color-cream)] max-w-2xl mx-auto text-lg"
        >
          A legacy of comfort, redefining hospitality in Siliguri.
        </motion.p>
      </section>

      {/* Story Content */}
      <section className="py-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl text-[var(--color-secondary)] mb-6 leading-tight">
              Hospitality With A <span className="text-[var(--color-accent)] italic">Personal Touch</span>
            </h2>
            <p className="text-[var(--color-brown-light)] mb-6 text-lg leading-relaxed">
              Hotel Classic was built on a simple philosophy: to provide every guest with a home away from home. Located conveniently near NJP Station and Netaji More, our hotel is the perfect gateway for travelers exploring the beauty of North Bengal or attending business in Siliguri.
            </p>
            <p className="text-[var(--color-brown-light)] text-lg leading-relaxed">
              Over the years, we have mastered the art of balancing modern amenities with timeless warmth. From our 24-hour dedicated service to our meticulously prepared rooms, every detail is designed to elevate your stay.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
          >
            <img 
              src="/assets/WhatsApp Image 2026-08-27 at 12.35.25 (1).jpeg" 
              alt="Hotel Classic Exterior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Vision */}
      <section className="py-20 px-4 bg-[var(--color-cream)] text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-3xl"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">Our Vision</h2>
          <p className="text-2xl md:text-3xl text-[var(--color-secondary)] leading-relaxed italic font-serif">
            "To be the premier destination for comfort and luxury in Siliguri, where every guest leaves with a memorable experience and a desire to return."
          </p>
        </motion.div>
      </section>
    </main>
  );
}
