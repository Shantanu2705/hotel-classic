"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="Hotel Classic Logo" width={200} height={55} style={{ objectFit: 'contain' }} />
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="#about" className={styles.link}>About</Link>
        <Link href="#rooms" className={styles.link}>Rooms</Link>
        <Link href="#facilities" className={styles.link}>Facilities</Link>
        <Link href="#gallery" className={styles.link}>Gallery</Link>
        <Link href="#contact" className={styles.link}>Contact</Link>
      </div>

      <a href="#contact" className={styles.bookBtn}>Book Now</a>

      <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Very simple inline mobile menu (can be expanded) */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, width: '100%', 
          background: 'var(--primary)', padding: '1rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Link href="#about" style={{ color: 'white' }} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="#rooms" style={{ color: 'white' }} onClick={() => setMobileOpen(false)}>Rooms</Link>
          <Link href="#facilities" style={{ color: 'white' }} onClick={() => setMobileOpen(false)}>Facilities</Link>
          <Link href="#gallery" style={{ color: 'white' }} onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link href="#contact" style={{ color: 'white' }} onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
