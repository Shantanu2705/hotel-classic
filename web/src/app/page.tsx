"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import { Wifi, Car, Utensils, Droplets, MapPin, Phone, Wind, Shield } from 'lucide-react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero} id="home">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.videoBg}
          >
            <source src="/assets/general/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
          
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Experience Premium Comfort
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Stay in style at Classic Lodge. Your perfect getaway in Siliguri.
            </motion.p>
            <motion.button variants={fadeUp} className="btn btn-accent">
              Explore Our Rooms
            </motion.button>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section className={styles.about} id="about">
          <div className="container">
            <div className={styles.aboutGrid}>
              <motion.div 
                className={styles.aboutText}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <h2>Welcome to Hotel Classic</h2>
                <p>Located near the heart of Siliguri at NJP Main Road, Hotel Classic (Classic Lodge) is a premier destination offering exceptional food and lodging.</p>
                <p>Whether you're visiting for business or leisure, our luxurious AC and Non-AC rooms provide the perfect retreat. Enjoy our 24-hour service, running hot and cold water, and a host of modern amenities designed to make your stay unforgettable.</p>
                <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
              </motion.div>
              <motion.div 
                className={styles.aboutImage}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image src="/assets/general/exterior.jpg" alt="Hotel Classic Exterior" layout="fill" objectFit="cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROOMS SECTION */}
        <section className={styles.rooms} id="rooms">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Our Accommodations</h2>
              <p>Designed for comfort and relaxation</p>
            </div>

            <motion.div 
              className={styles.roomsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { name: 'Classic Double Room', img: '/assets/rooms/room-double-3.jpg', desc: 'Spacious and elegant room perfect for couples.', amenities: ['AC', 'TV', 'Attach Bath'] },
                { name: 'Premium Family Room', img: '/assets/rooms/room-multi-1.jpg', desc: 'Comfortable stay with multiple beds for the whole family.', amenities: ['AC', 'Room Service', 'TV'] },
                { name: 'Executive Suite', img: '/assets/rooms/room-double-1.jpg', desc: 'Luxury bedding and premium amenities for a superior stay.', amenities: ['AC', 'Hot Water', 'WiFi'] },
              ].map((room, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.roomCard}>
                  <div className={styles.roomImage}>
                    <img src={room.img} alt={room.name} />
                  </div>
                  <div className={styles.roomContent}>
                    <h3>{room.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{room.desc}</p>
                    <div className={styles.roomAmenities}>
                      {room.amenities.map((a, j) => (
                        <div key={j} className={styles.amenity}>
                          <span style={{ color: 'var(--accent)' }}>•</span> {a}
                        </div>
                      ))}
                    </div>
                    <button className="btn btn-outline" style={{ width: '100%' }}>Book Room</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FACILITIES SECTION */}
        <section className={styles.facilities} id="facilities">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Premium Facilities</h2>
              <p>Everything you need for a comfortable stay</p>
            </div>

            <motion.div 
              className={styles.facilitiesGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: <Wind size={32} />, title: 'AC & Non-AC Rooms', desc: 'Choose the comfort that suits you best.' },
                { icon: <Utensils size={32} />, title: 'Restaurant', desc: 'Delicious food and lodging all in one place.' },
                { icon: <Droplets size={32} />, title: 'Hot & Cold Water', desc: '24/7 running water with attached baths.' },
                { icon: <Car size={32} />, title: 'Car Parking', desc: 'Safe and secure parking for your vehicles.' },
                { icon: <Phone size={32} />, title: 'Intercom', desc: 'Immediate room service at your fingertips.' },
                { icon: <Shield size={32} />, title: '24 Hrs Service', desc: 'Round the clock assistance and security.' },
              ].map((facility, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.facilityItem}>
                  <div className={styles.iconWrapper}>
                    {facility.icon}
                  </div>
                  <h4>{facility.title}</h4>
                  <p>{facility.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className={styles.gallery} id="gallery">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Gallery</h2>
              <p>A glimpse into our luxurious spaces</p>
            </div>

            <motion.div 
              className={styles.masonryGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className={`${styles.galleryItem} ${styles.tall}`}>
                <img src="/assets/rooms/room-double-4.jpg" alt="Gallery Image 1" />
              </motion.div>
              <motion.div variants={fadeUp} className={styles.galleryItem}>
                <img src="/assets/bathrooms/bathroom-1.jpg" alt="Bathroom" />
              </motion.div>
              <motion.div variants={fadeUp} className={styles.galleryItem}>
                <img src="/assets/rooms/room-double-6.jpg" alt="Gallery Image 3" />
              </motion.div>
              <motion.div variants={fadeUp} className={`${styles.galleryItem} ${styles.wide}`}>
                <img src="/assets/rooms/room-multi-2.jpg" alt="Gallery Image 4" />
              </motion.div>
              <motion.div variants={fadeUp} className={styles.galleryItem}>
                <img src="/assets/rooms/room-double-8.jpg" alt="Gallery Image 5" />
              </motion.div>
              <motion.div variants={fadeUp} className={styles.galleryItem}>
                <img src="/assets/bathrooms/bathroom-4.jpg" alt="Bathroom" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className={styles.contact} id="contact">
          <div className="container">
            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>
                <h2>Get in Touch</h2>
                
                <div className={styles.infoBlock}>
                  <MapPin size={24} color="var(--accent)" />
                  <div>
                    <h4>Location</h4>
                    <p>NJP Main Road (Near Netaji More, First/Second Bridge)<br/>Siliguri</p>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <Phone size={24} color="var(--accent)" />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 99999 99999</p>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <Shield size={24} color="var(--accent)" />
                  <div>
                    <h4>Other Facilities</h4>
                    <p>Travel Desk (Railway & Air Tickets)<br/>Doctor on call<br/>Credit Card Facility</p>
                  </div>
                </div>
                
                <button className="btn btn-accent" style={{ marginTop: 'var(--space-md)' }}>
                  Contact Us
                </button>
              </div>
              
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <img src="/assets/general/facilities-info.jpg" alt="Map/Info" style={{ opacity: 0.8 }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
