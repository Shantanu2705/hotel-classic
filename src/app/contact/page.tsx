"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", checkIn: "", checkOut: "", guests: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Normally handle form submission here
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          CONTACT US
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[var(--color-cream)] max-w-2xl mx-auto text-lg"
        >
          We are here to assist you with your reservations and enquiries.
        </motion.p>
      </section>

      <section className="py-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & QR */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-[var(--color-secondary)] mb-8 font-semibold">Get In Touch</h2>
            
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-sm shadow-sm border border-[var(--color-brown-light)]/10">
                <MapPin className="text-[var(--color-accent)] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-1">Our Location</h4>
                  <p className="text-[var(--color-brown-light)]">NJP Main Road, Near Netaji More,<br />Siliguri, West Bengal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-sm shadow-sm border border-[var(--color-brown-light)]/10">
                <Phone className="text-[var(--color-accent)] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-1">Call Us</h4>
                  <p className="text-[var(--color-brown-light)]">+91 12345 67890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-sm shadow-sm border border-[var(--color-brown-light)]/10">
                <Mail className="text-[var(--color-accent)] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[var(--color-secondary)] mb-1">Email Us</h4>
                  <p className="text-[var(--color-brown-light)]">reservations@hotelclassic.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md text-center border-t-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">Instant Booking Payment</h3>
              <p className="text-sm text-[var(--color-brown-light)] mb-6">Scan the QR code below using PayZapp or any UPI app to secure your reservation.</p>
              <div className="flex justify-center">
                <img src="/assets/WhatsApp Image 2026-08-27 at 12.35.26.jpeg" alt="PayZapp QR Code" className="w-64 max-w-full rounded-sm border p-2" />
              </div>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-sm shadow-xl"
          >
            <h2 className="text-3xl text-[var(--color-secondary)] mb-2 font-semibold">Send an Enquiry</h2>
            <p className="text-[var(--color-brown-light)] mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-sm text-center border border-green-200">
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p>Your enquiry has been sent successfully. We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--color-secondary)] mb-1">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--color-secondary)] mb-1">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--color-secondary)] mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--color-secondary)] mb-1">Check-in Date</label>
                    <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--color-secondary)] mb-1">Check-out Date</label>
                    <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--color-secondary)] mb-1">Guests</label>
                    <input type="number" min="1" name="guests" value={formData.guests} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--color-secondary)] mb-1">Message / Special Requests</label>
                  <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full p-3 bg-[var(--color-cream)] border-b border-[var(--color-brown-light)]/30 focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[var(--color-accent)] transition-colors duration-300 w-full">
                  Submit Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
