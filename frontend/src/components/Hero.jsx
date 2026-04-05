import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.scss';

const heroImages = [
  'https://images.unsplash.com/photo-1720729823943-19fff3227f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwaG90b2dyYXBoeSUyMGhlcm98ZW58MXx8fHwxNzY4MjA3MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE5NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODIwNzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Images with Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.backgroundContainer} ${
            index === currentImageIndex ? styles.visible : styles.hidden
          }`}
        >
          <img
            src={image}
            alt="Photography showcase"
            className={styles.backgroundImage}
          />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Capturing Timeless Moments
            </h1>
            <p className={styles.subtitle}>
              Luxury photography for life's most precious moments
            </p>
            <div className={styles.buttonContainer}>
              <button
                onClick={scrollToContact}
                className={styles.ctaButton}
              >
                <span className={styles.buttonText}>Book Your Session</span>
                <svg 
                  className={styles.buttonIcon}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
                <div className={styles.buttonBackground} />
                <span className={styles.buttonTextHover}>
                  <span>Book Your Session</span>
                  <svg 
                    className={styles.buttonIcon}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
