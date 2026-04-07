import React, { useEffect, useRef } from 'react';
import styles from '../styles/Work.module.scss';

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Autumn Wedding',
    category: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1765350226723-a96ab0705403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW4nJTIwY291cGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgxOTQzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A timeless celebration captured in golden hour light',
  },
  {
    id: 2,
    title: 'Executive Portraits',
    category: 'Portrait',
    image:
      'https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjgyMDcxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Corporate photography that conveys leadership and vision',
  },
  {
    id: 3,
    title: 'Luxury Timepiece Collection',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwd2F0Y2h8ZW58MXx8fHwxNzY4MTg1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Product photography showcasing exquisite craftsmanship',
  },
  {
    id: 4,
    title: 'Fashion Editorial',
    category: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1700150595270-499a1ce07804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY4MTY3NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High fashion meets artistic expression',
  },
  {
    id: 5,
    title: 'Architectural Elegance',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1648917861061-5329e39b118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODIwNzExNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capturing modern design and structure',
  },
  {
    id: 6,
    title: 'Natural Beauty',
    category: 'Portrait',
    image:
      'https://images.unsplash.com/photo-1494782611507-95b6d139e677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY4MjA3MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Outdoor lifestyle photography in natural settings',
  },
];

// ── Shared reveal hook ────────────────────────────────────
function useRevealOnScroll(ref, { threshold = 0.12 } = {}) {
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

export function Work() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);
  const ctaRef    = useRef(null);

  useRevealOnScroll(headerRef, { threshold: 0.2  });
  useRevealOnScroll(ctaRef,    { threshold: 0.3  });

  // Cards: single observer on grid, stagger via CSS --delay
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      grid.querySelectorAll('[data-card]').forEach((c) => { c.dataset.visible = 'true'; });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('[data-card]')
            .forEach((c) => { c.dataset.visible = 'true'; });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className={styles.container}>

        {/* ── Header ──────────────────────────────── */}
        <header
          className={styles.header}
          ref={headerRef}
          data-visible="false"
        >
          <span className={styles.label} aria-hidden="true">Portfolio</span>
          <h2 id="work-heading" className={styles.title}>Featured Work</h2>
          <p className={styles.description}>
            A curated selection of recent projects — each one a distinct story
            told through light, composition, and craft.
          </p>
        </header>

        {/* ── Portfolio grid ──────────────────────── */}
        <div className={styles.portfolioGrid} ref={gridRef}>
          {portfolioItems.map((item, index) => (
            <article
              key={item.id}
              className={styles.portfolioItem}
              data-card
              data-visible="false"
              style={{ '--delay': `${index * 0.09}s` }}
            >
              <img
                src={item.image}
                alt={`${item.title} — Lensscape`}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />

              {/* Always-visible bottom gradient + text on mobile */}
              <div className={styles.mobileGradient} aria-hidden="true" />

              {/* Hover overlay (desktop) */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <p className={styles.portfolioCategory}>{item.category}</p>
                  <h3 className={styles.portfolioTitle}>{item.title}</h3>
                  <p className={styles.portfolioDescription}>{item.description}</p>
                  <button
                    className={styles.portfolioLink}
                    type="button"
                    aria-label={`View project — ${item.title}`}
                  >
                    <span>View Project</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile text — always readable */}
              <div className={styles.mobileCaption} aria-hidden="true">
                <p className={styles.mobileCaptionCategory}>{item.category}</p>
                <p className={styles.mobileCaptionTitle}>{item.title}</p>
              </div>

              {/* Border accent */}
              <div className={styles.borderAccent} aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* ── View all CTA ────────────────────────── */}
        <div
          className={styles.viewAllButton}
          ref={ctaRef}
          data-visible="false"
        >
          <button
            className={styles.buttonWrapper}
            type="button"
            aria-label="View the full Lensscape portfolio"
          >
            <span>View Full Portfolio</span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}