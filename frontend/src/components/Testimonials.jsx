import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from '../styles/Testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Bride',
    project: 'Autumn Wedding',
    image: 'https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODE5MDA1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The photos from our wedding day exceeded every expectation. Each image tells our story with such beauty and emotion. The attention to detail and artistic vision is truly remarkable.',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CEO',
    project: 'Corporate Portraits',
    image: 'https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4MjA3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Professional, talented, and incredibly easy to work with. The executive portraits captured exactly the image we wanted to project. Absolutely world-class photography.',
  },
  {
    id: 3,
    name: 'Emma & James Rodriguez',
    role: 'Couple',
    project: 'Engagement Session',
    image: 'https://images.unsplash.com/photo-1605381942640-0a262ce59788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzY4MTk5MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'From start to finish, the experience was flawless. The photos are stunning works of art that we will treasure forever. Worth every penny and more!',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className={styles.section}>
      {/* Decorative Elements */}
      <div className={styles.decorativeElement} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>
            Client Experiences
          </h2>
          <p className={styles.subtitle}>
            Trusted by discerning clients who value excellence
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={styles.carouselContainer}>
          <div className={styles.testimonialBox}>
            {/* Quote Icon */}
            <Quote className={styles.quoteIcon} />

            <div className={styles.grid}>
              {/* Client Image */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageBg} />
                <div className={styles.imageContainer}>
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialQuote}>
                  {currentTestimonial.quote}
                </p>

                <div className={styles.testimonialMeta}>
                  <p className={styles.testimonialName}>
                    {currentTestimonial.name}
                  </p>
                  <p className={styles.testimonialRole}>
                    {currentTestimonial.role} • {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className={styles.controls}>
              <button
                onClick={handlePrevious}
                className={styles.navButton}
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>

              {/* Indicators */}
              <div className={styles.indicators}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className={styles.navButton}
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
