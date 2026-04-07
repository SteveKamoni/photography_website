import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Lightbox } from '../components/Lightbox';
import styles from '../styles/pages/Portfolio.module.scss';

// ── Expanded portfolio items across multiple categories ────
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
    image: 'https://images.unsplash.com/photo-1704699217822-b97dbd6a3f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjgyODkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
    title: 'Corporate Event Coverage',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1519501025264-065cf004f348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NjgyMDcyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional event documentation and coverage',
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
    image: 'https://images.unsplash.com/photo-1545170122-fc7cdb32983f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYnJhbmR8ZW58MXx8fHwxNzY4MTg1NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Brand imagery for luxury fashion collections',
  },

  // Lifestyle/Event
  {
    id: 12,
    title: 'Celebration Moments',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwZXZlbnR8ZW58MXx8fHwxNzY4MjA3MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capturing joy and celebration at special events',
  },
  {
    id: 13,
    title: 'Intimate Gathering',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGdhdGhlcmluZyUyMHBlb3BsZXxlbnwxfHx8fDE3NjgyMDczMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Lifestyle photography capturing authentic moments',
  },
  {
    id: 14,
    title: 'Urban Lifestyle',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxpZmVzdHlsZSUyMHBob3RvZ3JhcGh8ZW58MXx8fHwxNzY4MjA3MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern urban lifestyle imagery',
  },
  {
    id: 15,
    title: 'Brand Storytelling',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0b3J5dGVsbGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODIwNzM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Visual storytelling for brand campaigns',
  },
  {
    id: 16,
    title: 'Nature & Landscape',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBiZWF1dHlmb2x8ZW58MXx8fHwxNzY4MjA3Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Breathtaking landscape and nature photography',
  },
];

const categories = ['All', 'Wedding', 'Portrait', 'Commercial', 'Fashion', 'Lifestyle', 'Event'];

// ── Reveal on scroll hook ──────────────────────────────────
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

// ── Portfolio Page Component ──────────────────────────────
export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);

  useRevealOnScroll(headerRef, { threshold: 0.2 });
  useRevealOnScroll(filterRef, { threshold: 0.2 });

  // Filter items based on category
  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

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

  const openLightbox = useCallback((index) => {
    // Find the index in the filtered items and map back to the original items
    const actualIndex = portfolioItems.findIndex(item => item.id === filteredItems[index].id);
    setLightboxIndex(actualIndex);
  }, [filteredItems]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + portfolioItems.length) % portfolioItems.length), []);
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % portfolioItems.length), []);

  return (
    <>
      <section className={styles.section} aria-labelledby="portfolio-heading">
        {/* Hero Banner */}
        <div className={styles.heroBanner} ref={headerRef} data-visible="false">
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 id="portfolio-heading" className={styles.heroTitle}>Our Portfolio</h1>
            <p className={styles.heroDescription}>
              A comprehensive showcase of our finest work across all categories
            </p>
          </div>
        </div>

        <div className={styles.container}>
          {/* Filter Bar */}
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
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div
            className={styles.portfolioGrid}
            ref={gridRef}
            role="list"
          >
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                className={styles.portfolioItem}
                data-item
                data-visible="false"
                style={{ '--delay': `${index * 0.07}s` }}
                onClick={() => openLightbox(index)}
                type="button"
                aria-label={`Open image — ${item.title}`}
                role="listitem"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.itemOverlay} aria-hidden="true">
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemCategory}>{item.category}</p>
                  </div>
                  <div className={styles.itemIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className={styles.noResults}>
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

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
