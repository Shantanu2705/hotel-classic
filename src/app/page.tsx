"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Hero3D from "@/components/Hero3D";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main ref={containerRef} className="flex flex-col min-h-screen">
      {/* 1. Premium 3D Hero Section */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-b from-[#FDFBF4] to-[#F5F1E6]">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 z-10 px-6 md:px-12 lg:px-24 mt-20 md:mt-0 flex flex-col justify-center items-start text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--color-secondary)] mb-6 drop-shadow-sm tracking-widest leading-tight"
          >
            HOTEL <br/>CLASSIC
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-2xl text-[var(--color-brown-dark)] mb-10 max-w-xl font-light tracking-wide"
          >
            A Comfortable Stay. A Memorable Experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link 
              href="/rooms" 
              className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[var(--color-accent)] transition-colors duration-300 shadow-xl"
            >
              Book Your Stay <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Right Side: 3D Canvas */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative cursor-grab active:cursor-grabbing">
          <Hero3D />
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-secondary)]/70 z-20 pointer-events-none"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-[var(--color-secondary)]/30 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 w-full h-full bg-[var(--color-secondary)]"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Introduction / About Preview */}
      <section className="py-24 px-4 bg-[var(--color-primary)] relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">Welcome to Luxury</h2>
            <h3 className="text-4xl md:text-5xl text-[var(--color-secondary)] mb-8 leading-tight">
              Where Elegance Meets Warm Hospitality
            </h3>
            <p className="text-[var(--color-brown-light)] text-lg leading-relaxed mb-10">
              Situated in the heart of the city near NJP Station, Hotel Classic offers a sanctuary of comfort for travelers. 
              Whether you are here for business or leisure, our 24-hour service, premium amenities, and meticulously designed rooms ensure a perfect stay.
            </p>
            <Link href="/about" className="text-[var(--color-secondary)] border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2 uppercase tracking-wider text-sm font-medium">
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Rooms Preview */}
      <section className="py-24 px-4 bg-[var(--color-cream)] relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4 font-semibold">Accommodations</h2>
              <h3 className="text-4xl md:text-5xl text-[var(--color-secondary)]">Your Private Sanctuary</h3>
            </div>
            <Link href="/rooms" className="text-[var(--color-secondary)] border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2 uppercase tracking-wider text-sm font-medium">
              View All Rooms <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Room 1 */}
            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative overflow-hidden h-[400px] mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src="/assets/WhatsApp Image 2026-08-27 at 12.35.20 (1).jpeg" 
                  alt="Premium Double Room" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-2xl text-[var(--color-secondary)] mb-2">Premium Double Room</h4>
              <p className="text-[var(--color-brown-light)] mb-4 line-clamp-2">A luxurious space designed for couples, featuring elegant decor, an attached bath, and modern amenities.</p>
              <span className="text-[var(--color-accent)] uppercase tracking-wider text-sm font-medium group-hover:underline underline-offset-4">Explore</span>
            </motion.div>

            {/* Room 2 */}
            <motion.div variants={fadeIn} className="group cursor-pointer mt-0 md:mt-12">
              <div className="relative overflow-hidden h-[400px] mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src="/assets/WhatsApp Image 2026-08-27 at 12.35.21 (1).jpeg" 
                  alt="Spacious Triple Room" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-2xl text-[var(--color-secondary)] mb-2">Spacious Triple Room</h4>
              <p className="text-[var(--color-brown-light)] mb-4 line-clamp-2">Perfect for families or small groups, offering ample space and three comfortable beds for a restful night.</p>
              <span className="text-[var(--color-accent)] uppercase tracking-wider text-sm font-medium group-hover:underline underline-offset-4">Explore</span>
            </motion.div>

            {/* Room 3 */}
            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative overflow-hidden h-[400px] mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src="/assets/WhatsApp Image 2026-08-27 at 12.35.23 (1).jpeg" 
                  alt="Comfort Twin Room" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-2xl text-[var(--color-secondary)] mb-2">Comfort Twin Room</h4>
              <p className="text-[var(--color-brown-light)] mb-4 line-clamp-2">Ideal for friends traveling together, complete with twin beds, AC, and round-the-clock room service.</p>
              <span className="text-[var(--color-accent)] uppercase tracking-wider text-sm font-medium group-hover:underline underline-offset-4">Explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Video Experience Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden z-10">
        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/hotel-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-[var(--color-brown-dark)]/60 mix-blend-multiply" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative z-20 text-center px-4"
        >
          <div className="w-20 h-20 mx-auto rounded-full border border-white/30 flex items-center justify-center mb-8 bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">
            <Play className="text-white ml-2" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 drop-shadow-lg">Experience Hotel Classic</h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">Take a virtual tour of our premium accommodations and see the comfort that awaits you.</p>
        </motion.div>
      </section>

      {/* 5. Facilities & Amenities */}
      <section className="py-24 px-4 bg-[var(--color-primary)] relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4 font-semibold">Amenities</h2>
            <h3 className="text-4xl md:text-5xl text-[var(--color-secondary)]">Uncompromising Service</h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { title: "24 Hours Service", desc: "Round the clock assistance for all your needs." },
              { title: "AC & Non-AC Rooms", desc: "Climate control options tailored to your preference." },
              { title: "Restaurant & Laundry", desc: "Delicious meals and prompt laundry services." },
              { title: "Travel Desk", desc: "Railway and Air ticket booking assistance." },
            ].map((facility, index) => (
              <motion.div key={index} variants={fadeIn} className="flex flex-col items-center text-center p-6 bg-[var(--color-cream)]/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <CheckCircle2 className="text-[var(--color-accent)] mb-4" size={40} strokeWidth={1.5} />
                <h4 className="text-xl text-[var(--color-secondary)] font-medium mb-3">{facility.title}</h4>
                <p className="text-[var(--color-brown-light)] text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/facilities" className="inline-flex items-center gap-2 bg-transparent text-[var(--color-secondary)] border border-[var(--color-secondary)] px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300">
              View All Facilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
