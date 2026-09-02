import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/logo.png" alt="Hotel Classic Logo" width={220} height={60} style={{ objectFit: 'contain' }} />
            </Link>
            <p className={styles.description}>
              Experience premium comfort and unmatched hospitality at Siliguri's finest destination for travelers.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <div className={styles.links}>
              <Link href="#about">About Us</Link>
              <Link href="#rooms">Our Rooms</Link>
              <Link href="#facilities">Facilities</Link>
              <Link href="#gallery">Gallery</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={20} />
                <span>NJP Main Road (Near Netaji More, Second Bridge), Siliguri</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div className={styles.contactLinks}>
                  <a href="tel:+919434479413" title="Call us directly from your phone!" className={styles.contactLink}>+91 9434479413</a>
                  <a href="tel:+917477523325" title="Call us directly from your phone!" className={styles.contactLink}>+91 7477523325</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={20} />
                <a href="mailto:hotelclassicsiliguri@gmail.com" title="Send us an email!" className={styles.contactLink}>hotelclassicsiliguri@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <MessageCircle size={20} />
                <a href="https://wa.me/919434479413" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp!" className={styles.contactLink}>WhatsApp: +91 9434479413</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Hotel Classic (Classic Lodge). All rights reserved.</p>
          <p className={styles.credit}>
            Designed by <a href="https://www.digitaldictionary.in" target="_blank" rel="noopener noreferrer">Digital Dictionary</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
