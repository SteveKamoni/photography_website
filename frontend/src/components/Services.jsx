import React, { useEffect, useRef } from 'react';
import { Heart, UserCircle, Building2, Calendar, Camera, Sparkles } from 'lucide-react';
import styles from '../styles/Services.module.scss';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'Capturing your special day with elegance and emotion. From intimate ceremonies to grand celebrations, we document every precious moment.',
    image:
      'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE5NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: UserCircle,
    title: 'Portrait Photography',
    description:
      'Professional portraits that capture your essence. Perfect for executives, artists, and individuals seeking timeless, defining imagery.',
    image:
      'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODIwNzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Building2,
    title: 'Commercial Photography',
    description:
      'Elevate your brand with striking commercial imagery — product photography, corporate events, and architectural shoots tailored to your market.',
    image:
      'https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY4MTcxODYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Calendar,
    title: 'Event Photography',
    description:
      'Comprehensive event coverage from corporate galas to private celebrations — capturing the energy, atmosphere, and moments that matter.',
    image:
      'https://images.unsplash.com/photo-1658063715878-bff71ed96a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4MjA3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Camera,
    title: 'Fashion Photography',
    description:
      'Editorial and commercial fashion photography with a luxury aesthetic. Bringing style, narrative, and sophistication to every frame.',
    image:
      'https://images.unsplash.com/photo-1717766293792-e78ea97e9d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY4MTI2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sparkles,
    title: 'Lifestyle Photography',
    description:
      'Authentic lifestyle imagery that tells your story. From family sessions to personal branding — genuine moments, beautifully preserved.',
    image:
      'https://images.unsplash.com/photo-1724866525512-5658ee2e2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeSUyMGhvbWV8ZW58MXx8fHwxNzY4MjA3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Services() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);

  // ── Header reveal ─────────────────────────────────────────
  useEffect(() => {
    const el = headerRef.current;
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Cards staggered reveal ────────────────────────────────
  // One observer on the grid; each card gets its own --delay from index.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      grid.querySelectorAll('[data-card]').forEach((card) => {
        card.dataset.visible = 'true';
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('[data-card]')
            .forEach((card) => { card.dataset.visible = 'true'; });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>

        {/* ── Section header ─────────────────────────── */}
        <header className={styles.header} ref={headerRef} data-visible="false">
          <span className={styles.label} aria-hidden="true">Our Services</span>
          <h2 id="services-heading" className={styles.title}>
            What We Offer
          </h2>
          <p className={styles.description}>
            Specialised photography services tailored to capture your vision with
            precision, artistry, and a distinctly Lensscape touch.
          </p>
        </header>

        {/* ── Services grid ──────────────────────────── */}
        <div className={styles.servicesGrid} ref={gridRef}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className={styles.serviceCard}
                data-card
                data-visible="false"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className={styles.serviceImage}>
                  <img
                    src={service.image}
                    alt={`${service.title} by Lensscape`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.imageOverlay} aria-hidden="true" />
                  <Icon
                    className={styles.serviceIcon}
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>

                {/* Content */}
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <button
                    className={styles.serviceLink}
                    type="button"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
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
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}