import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              HOTEL<span>CLASSIC</span>
            </div>
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
                <span>+91 99999 99999<br/><small>(Update with real number)</small></span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={20} />
                <span>info@hotelclassic.com</span>
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
