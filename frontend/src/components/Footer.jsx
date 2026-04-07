import React from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';
import styles from '../styles/Footer.module.scss';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainContent}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>
              LENSCAPE
            </h3>
            <p className={styles.brandDescription}>
              Capturing life's most precious moments with elegance and artistry. 
              Luxury photography for discerning clients worldwide.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {['Home', 'About', 'Services', 'Work', 'Gallery'].map((item) => (
                <li key={item} className={styles.linkItem}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={styles.link}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4 className={styles.sectionTitle}>Newsletter</h4>
            <p className={styles.newsletterDescription}>
              Subscribe to receive updates on new work and exclusive offers.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input
                type="email"
                placeholder="Your email"
                required
                className={styles.newsletterInput}
              />
              <button
                type="submit"
                className={styles.newsletterButton}
                aria-label="Subscribe"
              >
                <Mail />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.leftContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Lenscape Photography. All rights reserved.
            </p>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>
                Privacy Policy
              </a>
              <a href="#" className={styles.footerLink}>
                Terms of Service
              </a>
            </div>
          </div>
          <div className={styles.brandCredit}>
            <p className={styles.creditText}>
              Designed & Built by <span className={styles.brandName}>KAMONI</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={styles.scrollToTopButton}
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    </footer>
  );
}
