import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['Home', 'About', 'Services', 'Work', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link 
            to="/"
            className={styles.logo}
          >
            LENSCAPE
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (location.pathname !== '/') {
                    // If on portfolio page, navigate home first
                    window.location.href = '/#' + item.toLowerCase();
                  } else {
                    // If on home page, scroll to section
                    scrollToSection(item.toLowerCase());
                  }
                }}
                className={styles.navItem}
              >
                {item}
              </button>
            ))}
            <Link 
              to="/portfolio" 
              className={styles.navItem}
            >
              Portfolio
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.hamburger}>
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavContent}>
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => {
                if (location.pathname !== '/') {
                  window.location.href = '/#' + item.toLowerCase();
                } else {
                  scrollToSection(item.toLowerCase());
                }
              }}
              className={styles.mobileNavItem}
              style={{ 
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item}
            </button>
          ))}
          <Link 
            to="/portfolio" 
            className={styles.mobileNavItem}
            style={{ 
              transitionDelay: mobileMenuOpen ? `${navItems.length * 50}ms` : '0ms'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
