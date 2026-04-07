import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from '../styles/Testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Bride',
    project: 'Autumn Wedding',
    image:
      'https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODE5MDA1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    quote:
      'The photographs from our wedding day exceeded every expectation. Each image tells our story with such beauty and emotion — the artistic vision and attention to light is truly something else.',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CEO',
    project: 'Corporate Portraits',
    image:
      'https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4MjA3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    quote:
      'Professional, gifted, and remarkably easy to work with. The executive portraits captured exactly the presence we wanted to project to the world. Genuinely world-class work.',
  },
  {
    id: 3,
    name: 'Emma & James Rodriguez',
    role: 'Couple',
    project: 'Engagement Session',
    image:
      'https://images.unsplash.com/photo-1605381942640-0a262ce59788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzY4MTk5MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    quote:
      'From the first consultation to final delivery, the experience was flawless. The photographs are works of art we will pass down through generations. There is no one else we would trust.',
  },
];

const SLIDE_DURATION = 7000;
const TRANSITION_MS  = 400;

// ── Shared reveal hook ────────────────────────────────────
function useRevealOnScroll(ref, { threshold = 0.15 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.visible = 'true';
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = 'true';
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating]   = useState(false);
  const [isHovered, setIsHovered]       = useState(false);
  const timerRef   = useRef(null);
  const headerRef  = useRef(null);
  const carouselRef = useRef(null);

  useRevealOnScroll(headerRef,  { threshold: 0.2 });
  useRevealOnScroll(carouselRef, { threshold: 0.1 });

  // ── Centralised slide change with transition ──────────
  const goTo = useCallback((next) => {
    if (isAnimating || next === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(next);
      setIsAnimating(false);
    }, TRANSITION_MS);
  }, [isAnimating, currentIndex]);

  const handlePrev = useCallback(() =>
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length),
  [goTo, currentIndex]);

  const handleNext = useCallback(() =>
    goTo((currentIndex + 1) % testimonials.length),
  [goTo, currentIndex]);

  // ── Auto-advance — pauses on hover ───────────────────
  useEffect(() => {
    if (isHovered) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), TRANSITION_MS);
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  // ── Pause on tab blur ─────────────────────────────────
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) clearInterval(timerRef.current);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      {/* ── Decorative gold glow (top-right) ─────────── */}
      <div className={styles.glowTopRight}  aria-hidden="true" />
      <div className={styles.glowBottomLeft} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Header ──────────────────────────────────── */}
        <header
          className={styles.header}
          ref={headerRef}
          data-visible="false"
        >
          <span className={styles.label} aria-hidden="true">Testimonials</span>
          <h2 id="testimonials-heading" className={styles.title}>
            Client Experiences
          </h2>
          <p className={styles.subtitle}>
            Trusted by discerning clients who value excellence
          </p>
        </header>

        {/* ── Carousel ────────────────────────────────── */}
        <div
          className={styles.carouselContainer}
          ref={carouselRef}
          data-visible="false"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.testimonialBox}>

            {/* Decorative quote mark */}
            <Quote
              className={styles.quoteIcon}
              aria-hidden="true"
              focusable="false"
            />

            {/* Content — fades on transition */}
            <div
              className={styles.grid}
              data-animating={isAnimating}
            >
              {/* Client image */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageBg} aria-hidden="true" />
                <div className={styles.imageContainer}>
                  <img
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={styles.testimonialContent}>
                <blockquote className={styles.testimonialQuote}>
                  <p>&#8220;{t.quote}&#8221;</p>
                </blockquote>

                <div className={styles.testimonialMeta}>
                  <p className={styles.testimonialName}>{t.name}</p>
                  <p className={styles.testimonialRole}>
                    {t.role}&ensp;·&ensp;{t.project}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className={styles.controls} role="group" aria-label="Testimonial navigation">
              <button
                className={styles.navButton}
                onClick={handlePrev}
                type="button"
                aria-label="Previous testimonial"
              >
                <ChevronLeft aria-hidden="true" focusable="false" />
              </button>

              <div
                className={styles.indicators}
                role="tablist"
                aria-label="Testimonials"
              >
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`${item.name} — ${item.project}`}
                    className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                    onClick={() => goTo(index)}
                    type="button"
                  >
                    <span className={styles.indicatorFill} />
                  </button>
                ))}
              </div>

              <button
                className={styles.navButton}
                onClick={handleNext}
                type="button"
                aria-label="Next testimonial"
              >
                <ChevronRight aria-hidden="true" focusable="false" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}