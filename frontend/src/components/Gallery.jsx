import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Lightbox } from './Lightbox';
import styles from '../styles/Gallery.module.scss';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1684244177286-8625c54bce6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHByZXBhcmF0aW9uJTIwZGV0YWlsc3xlbnwxfHx8fDE3NjgyMDcyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Bride preparation details',
    tall: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzdW5zZXQlMjByb21hbnRpY3xlbnwxfHx8fDE3NjgyMDcyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Romantic couple at sunset',
    tall: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3NjgyMDcyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Luxury interior design',
    tall: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1751552147802-fda131627843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjgyMDcyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Jewelry close-up details',
    tall: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxMTIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Elegant woman portrait',
    tall: true,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODE2NTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Business professional headshot',
    tall: false,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1636969386919-b90cad8216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc2ODE3ODQwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern city architecture',
    tall: false,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1618239265038-9e4c865fbd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm91cXVldCUyMG1pbmltYWx8ZW58MXx8fHwxNzY4MjA3MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Minimal flowers bouquet',
    tall: false,
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

// ── Gallery ───────────────────────────────────────────────
export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const headerRef = useRef(null);
  const gridRef   = useRef(null);

  useRevealOnScroll(headerRef, { threshold: 0.2 });

  // Grid items stagger in via single observer
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      grid.querySelectorAll('[data-item]').forEach((el) => { el.dataset.visible = 'true'; });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('[data-item]')
            .forEach((el) => { el.dataset.visible = 'true'; });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  const openLightbox  = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length), []);
  const nextImage     = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % galleryImages.length), []);

  return (
    <>
      <section id="gallery" className={styles.section} aria-labelledby="gallery-heading">
        <div className={styles.container}>

          {/* ── Header ──────────────────────────── */}
          <header
            className={styles.header}
            ref={headerRef}
            data-visible="false"
          >
            <span className={styles.label} aria-hidden="true">Gallery</span>
            <h2 id="gallery-heading" className={styles.title}>Visual Excellence</h2>
            <p className={styles.description}>
              An intimate collection of celebrated Lensscape work — click any image to explore.
            </p>
          </header>

          {/* ── Gallery grid ────────────────────── */}
          <div
            className={styles.galleryGrid}
            ref={gridRef}
            role="list"
          >
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className={`${styles.galleryItem} ${image.tall ? styles.tall : ''}`}
                data-item
                data-visible="false"
                style={{ '--delay': `${index * 0.07}s` }}
                onClick={() => openLightbox(index)}
                type="button"
                aria-label={`Open image — ${image.alt}`}
                role="listitem"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />

                {/* Hover caption overlay */}
                <div className={styles.itemOverlay} aria-hidden="true">
                  <span className={styles.itemCaption}>{image.alt}</span>
                  <span className={styles.itemIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Lightbox (portal-style, outside section) ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}