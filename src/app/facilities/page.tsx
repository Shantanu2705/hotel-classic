"use client";

import { motion } from "framer-motion";
import { Clock, Shield, MapPin, Coffee, Droplet, MonitorPlay, Train, Car, Phone, WashingMachine, Cross, CreditCard, Zap, Wind } from "lucide-react";

const facilitiesList = [
  { icon: <Clock size={32} />, title: "24 Hours Service", desc: "Our staff is available round the clock to ensure your comfort." },
  { icon: <Wind size={32} />, title: "AC & Non AC Rooms", desc: "Choose the climate control option that suits you best." },
  { icon: <Droplet size={32} />, title: "Hot & Cold Water", desc: "24/7 running hot and cold water in all attached bathrooms." },
  { icon: <MonitorPlay size={32} />, title: "Cable TV", desc: "Stay entertained with multi-channel cable television in every room." },
  { icon: <Train size={32} />, title: "Travel Desk", desc: "Assistance with Railway and Air ticket booking for your convenience." },
  { icon: <Car size={32} />, title: "Car Parking & Rental", desc: "Secure parking and AC/Non AC car facilities available." },
  { icon: <Phone size={32} />, title: "Intercom Telephone", desc: "Direct intercom facilities to connect with room service." },
  { icon: <WashingMachine size={32} />, title: "Laundry Service", desc: "Prompt and professional laundry services." },
  { icon: <Coffee size={32} />, title: "Restaurant", desc: "Delicious meals served fresh." },
  { icon: <Cross size={32} />, title: "Doctor on Call", desc: "Medical assistance available whenever required." },
  { icon: <Zap size={32} />, title: "Power Backup", desc: "Uninterrupted power supply with our generator facility." },
  { icon: <CreditCard size={32} />, title: "Card Payments", desc: "We accept all major credit cards and digital payments." },
];

export default function Facilities() {
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
          FACILITIES
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[var(--color-cream)] max-w-2xl mx-auto text-lg"
        >
          Everything you need for a comfortable and hassle-free stay.
        </motion.p>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {facilitiesList.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 border border-[var(--color-brown-light)]/20 rounded-sm hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300 group bg-[var(--color-cream)]/30"
            >
              <div className="text-[var(--color-accent)] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {facility.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-secondary)] mb-3">{facility.title}</h3>
              <p className="text-[var(--color-brown-light)] leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
