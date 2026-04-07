import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Hero.module.scss';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1720729823943-19fff3227f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwaG90b2dyYXBoeSUyMGhlcm98ZW58MXx8fHwxNzY4MjA3MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    label: 'Luxury',
    alt:   'A luxury fine-art photography scene by Lensscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE5NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    label: 'Weddings',
    alt:   'An elegant wedding captured by Lensscape Photography',
  },
  {
    src: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODIwNzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    label: 'Portraits',
    alt:   'A professional portrait session by Lensscape Photography',
  },
];

const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 1000;

export function Hero() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex]   = useState(0);
  const [prevIndex, setPrevIndex]         = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  // ── Centralised transition handler ──────────────
  const advanceTo = (next) => {
    if (transitioning || next === currentIndex) return;
    setTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex(next);
    setTimeout(() => {
      setPrevIndex(null);
      setTransitioning(false);
    }, TRANSITION_DURATION);
  };

  // ── Auto-advance ─────────────────────────────────
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % heroImages.length;
        setPrevIndex(prev);
        setTransitioning(true);
        setTimeout(() => {
          setPrevIndex(null);
          setTransitioning(false);
        }, TRANSITION_DURATION);
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  // ── Pause on tab blur (battery / perf) ──────────
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
      } else {
        timerRef.current = setInterval(() => {
          setCurrentIndex((prev) => {
            const next = (prev + 1) % heroImages.length;
            setPrevIndex(prev);
            setTransitioning(true);
            setTimeout(() => {
              setPrevIndex(null);
              setTransitioning(false);
            }, TRANSITION_DURATION);
            return next;
          });
        }, SLIDE_DURATION);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={styles.heroSection}
      aria-label="Lensscape Photography — Hero"
    >
      {/* ── Background images ───────────────────── */}
      <div className={styles.slides} aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.backgroundSlide} ${
              index === currentIndex
                ? styles.slideCurrent
                : index === prevIndex
                ? styles.slidePrev
                : styles.slideHidden
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={styles.backgroundImage}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* ── Overlay layers ──────────────────────── */}
      <div className={styles.overlayBase}   aria-hidden="true" />
      <div className={styles.overlayLeft}   aria-hidden="true" />
      <div className={styles.overlayBottom} aria-hidden="true" />

      {/* ── Vertical category label (desktop only) ─ */}
      <p className={styles.verticalLabel} aria-hidden="true">
        {heroImages[currentIndex].label}
      </p>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — static, never fades
      ══════════════════════════════════════════ */}
      <div className={styles.content}>
        <div className={styles.textBlock}>

          {/* Eyebrow */}
          <div className={styles.eyebrow} aria-hidden="true">
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Est. 2018 · Nairobi, Kenya</span>
          </div>

          {/* Headline */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Where Every</span>
            <span className={styles.titleLine}>
              Frame Tells a&nbsp;<em className={styles.titleItalic}>Story</em>
            </span>
          </h1>

          {/* Brand descriptor */}
          <p className={styles.descriptor}>
            Lensscape is a fine-art photography studio crafting images of rare
            depth and beauty — from intimate portraits and editorial work to
            weddings and brand campaigns.
          </p>

          {/* Stats */}
          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Sessions Delivered</dt>
              <dd className={styles.statNumber}>800<span aria-hidden="true">+</span></dd>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Years of Craft</dt>
              <dd className={styles.statNumber}>12</dd>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <dt className={styles.statLabel}>Award Wins</dt>
              <dd className={styles.statNumber}>4</dd>
            </div>
          </dl>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <button
              className={styles.ctaButton}
              onClick={() => scrollTo('contact')}
              type="button"
            >
              <span className={styles.ctaLabel}>Book Your Session</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              className={styles.secondaryButton}
              onClick={() => navigate('/portfolio')}
              type="button"
            >
              View Portfolio
            </button>
          </div>

        </div>

        {/* ── Slide indicators ──────────────────── */}
        <div
          className={styles.indicators}
          role="tablist"
          aria-label="Image slides"
        >
          {heroImages.map((img, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`${img.label} — slide ${index + 1} of ${heroImages.length}`}
              className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              onClick={() => advanceTo(index)}
              type="button"
            />
          ))}
          <span className={styles.indicatorCount} aria-live="polite">
            {String(currentIndex + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(heroImages.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* ── Scroll cue (hidden on mobile) ────────── */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>

    </section>
  );
}