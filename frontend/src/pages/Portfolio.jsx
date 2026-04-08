// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Lightbox } from '../components/Lightbox';
import styles from '../styles/pages/Portfolio.module.scss';

// ── Portfolio items ───────────────────────────────────────
const portfolioItems = [
  // Wedding
  {
    id: 1,
    title: 'Elegant Autumn Wedding',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1765350226723-a96ab0705403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW4nJTIwY291cGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgxOTQzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A timeless celebration captured in golden hour light',
  },
  {
    id: 2,
    title: 'Sunset Vows',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE5NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Golden hour wedding photography at its finest',
  },
  {
    id: 3,
    title: 'Spring Garden Wedding',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1684244177286-8625c54bce6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Romantic garden ceremony with natural light',
  },
  // Portrait
  {
    id: 4,
    title: 'Executive Portraits',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjgyMDcxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Corporate photography that conveys leadership',
  },
  {
    id: 5,
    title: 'Natural Beauty',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1494782611507-95b6d139e677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY4MjA3MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Outdoor lifestyle photography in natural settings',
  },
  {
    id: 6,
    title: 'Studio Elegance',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxMTIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional studio portraits in controlled lighting',
  },
  // Commercial
  {
    id: 7,
    title: 'Luxury Timepiece Collection',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwd2F0Y2h8ZW58MXx8fHwxNzY4MTg1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Product photography showcasing exquisite craftsmanship',
  },
  {
    id: 8,
    title: 'Architectural Elegance',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1648917861061-5329e39b118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODIwNzExNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capturing modern design and structure',
  },
  {
    id: 9,
    title: 'Brand Storytelling',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0b3J5dGVsbGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODIwNzM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Visual storytelling for brand campaigns',
  },
  // Fashion
  {
    id: 10,
    title: 'Fashion Editorial',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1700150595270-499a1ce07804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY4MTY3NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High fashion meets artistic expression',
  },

  {
    id: 11,
    title: 'Luxury Branding',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1717766293792-e78ea97e9d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY4MTI2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Brand imagery for luxury fashion collections',
  },
  {
    id: 17,
    title: 'Studio Fashion Shoot',
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/31905471/pexels-photo-31905471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Professional fashion photography in a studio setting',
  },
  {
    id: 18,
    title: 'Runway Highlights',
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/31426291/pexels-photo-31426291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Dynamic runway photography capturing the energy of fashion shows',
  },
  // Event
  {
    id: 12,
    title: 'Celebration Moments',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1658063715878-bff71ed96a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4MjA3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capturing joy and celebration at special events',
  },
  {
    id: 13,
    title: 'Corporate Gala',
    category: 'Event',
    image: 'https://images.pexels.com/photos/15551978/pexels-photo-15551978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Professional event documentation and coverage',
  },
  {
    id: 19,
    title: 'Tech Conference',
    category: 'Event',
    image: 'https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Capturing the excitement and innovation of tech conferences',
  },
  // Lifestyle
  {
    id: 14,
    title: 'Intimate Gathering',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1724866525512-5658ee2e2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeSUyMGhvbWV8ZW58MXx8fHwxNzY4MjA3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Lifestyle photography capturing authentic moments',
  },
  {
    id: 15,
    title: 'Nature & Landscape',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBiZWF1dHlmb2x8ZW58MXx8fHwxNzY4MjA3Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Breathtaking landscape and nature photography',
  },
  {
    id: 16,
    title: 'Urban Lifestyle',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1636969386919-b90cad8216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc2ODE3ODQwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern urban lifestyle imagery',
  },
];

const categories = ['All', 'Wedding', 'Portrait', 'Commercial', 'Fashion', 'Event', 'Lifestyle'];

// ── Reveal hook ───────────────────────────────────────────
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

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex]   = useState(null);
  const [itemsVisible, setItemsVisible]     = useState(false);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef   = useRef(null);

  useRevealOnScroll(headerRef, { threshold: 0.1 });
  useRevealOnScroll(filterRef, { threshold: 0.15 });

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  // ── Grid visibility ────────────────────────────────────
  // Separate from IntersectionObserver so it re-triggers on filter change.
  // On first mount, observe the grid. After that, manage via state.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setItemsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItemsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  // Re-animate grid items when category changes
  // Small delay so the new items render before we set visible
  const handleCategoryChange = useCallback((category) => {
    setItemsVisible(false);
    setActiveCategory(category);
    setTimeout(() => setItemsVisible(true), 60);
  }, []);

  // ── Lightbox ───────────────────────────────────────────
  // Lightbox navigates through ALL items regardless of filter
  const openLightbox = useCallback((filteredIndex) => {
    const globalIndex = portfolioItems.findIndex(
      (item) => item.id === filteredItems[filteredIndex].id
    );
    setLightboxIndex(globalIndex);
  }, [filteredItems]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + portfolioItems.length) % portfolioItems.length), []);
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % portfolioItems.length), []);

  return (
    <>
      <main className={styles.page} aria-labelledby="portfolio-heading">

        {/* ════════════════════════════════════════
            HERO — full cinematic treatment
        ════════════════════════════════════════ */}
        <section className={styles.hero}>

          {/* Background image */}
          <div className={styles.heroBg} aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1720729823943-19fff3227f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwaG90b2dyYXBoeSUyMGhlcm98ZW58MXx8fHwxNzY4MjA3MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt=""
              className={styles.heroBgImage}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Overlay layers */}
          <div className={styles.heroOverlayBase}   aria-hidden="true" />
          <div className={styles.heroOverlayLeft}   aria-hidden="true" />
          <div className={styles.heroOverlayBottom} aria-hidden="true" />

          {/* Hero content */}
          <div
            className={styles.heroContent}
            ref={headerRef}
            data-visible="false"
          >
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowLine} aria-hidden="true" />
              <span className={styles.heroEyebrowText}>Lensscape · Our Work</span>
            </div>

            <h1 id="portfolio-heading" className={styles.heroTitle}>
              Our Portfolio
            </h1>

            <p className={styles.heroDescription}>
              A comprehensive showcase of celebrated Lensscape work — weddings,
              portraits, editorial, commercial, and everything in between.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>16<em>+</em></span>
                <span className={styles.heroStatLabel}>Featured Works</span>
              </div>
              <div className={styles.heroStatDivider} aria-hidden="true" />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>6</span>
                <span className={styles.heroStatLabel}>Categories</span>
              </div>
              <div className={styles.heroStatDivider} aria-hidden="true" />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>800<em>+</em></span>
                <span className={styles.heroStatLabel}>Sessions Delivered</span>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className={styles.scrollCue} aria-hidden="true">
            <span className={styles.scrollLine} />
            <span className={styles.scrollText}>Scroll</span>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FILTER + GRID
        ════════════════════════════════════════ */}
        <div className={styles.gridSection}>
          <div className={styles.container}>

            {/* Filter bar */}
            <div
              className={styles.filterBar}
              ref={filterRef}
              data-visible="false"
              role="group"
              aria-label="Filter portfolio by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                  onClick={() => handleCategoryChange(category)}
                  type="button"
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Item count */}
            <p className={styles.itemCount} aria-live="polite">
              {filteredItems.length} {filteredItems.length === 1 ? 'work' : 'works'}
              {activeCategory !== 'All' ? ` in ${activeCategory}` : ' across all categories'}
            </p>

            {/* Portfolio grid */}
            <div
              className={styles.portfolioGrid}
              ref={gridRef}
              role="list"
            >
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  className={styles.portfolioItem}
                  data-visible={itemsVisible ? 'true' : 'false'}
                  style={{ '--delay': `${Math.min(index * 0.06, 0.5)}s` }}
                  onClick={() => openLightbox(index)}
                  type="button"
                  aria-label={`View ${item.title}`}
                  role="listitem"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} — Lensscape`}
                    loading={index < 6 ? 'eager' : 'lazy'}
                    decoding="async"
                  />

                  {/* Mobile permanent gradient */}
                  <div className={styles.mobileGradient} aria-hidden="true" />

                  {/* Hover overlay — desktop */}
                  <div className={styles.itemOverlay} aria-hidden="true">
                    <p className={styles.itemCategory}>{item.category}</p>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <span className={styles.itemCta}>View Image</span>
                  </div>

                  {/* Mobile caption — always visible */}
                  <div className={styles.mobileCaption} aria-hidden="true">
                    <p className={styles.mobileCaptionCategory}>{item.category}</p>
                    <p className={styles.mobileCaptionTitle}>{item.title}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* No results */}
            {filteredItems.length === 0 && (
              <div className={styles.noResults} role="status">
                <p>No works found in this category.</p>
              </div>
            )}

          </div>
        </div>

      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={portfolioItems}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}