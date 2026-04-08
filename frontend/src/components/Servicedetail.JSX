// src/pages/ServiceDetail.jsx
import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import styles from '../styles/ServiceDetail.module.scss';

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

export function ServiceDetail() {
  const { slug }   = useParams();
  const navigate   = useNavigate();
  const service    = getServiceBySlug(slug);

  // Reveal refs
  const heroTextRef    = useRef(null);
  const includesRef    = useRef(null);
  const processRef     = useRef(null);
  const galleryRef     = useRef(null);
  const ctaRef         = useRef(null);

  useRevealOnScroll(heroTextRef,  { threshold: 0.1 });
  useRevealOnScroll(includesRef,  { threshold: 0.1 });
  useRevealOnScroll(processRef,   { threshold: 0.08 });
  useRevealOnScroll(galleryRef,   { threshold: 0.08 });
  useRevealOnScroll(ctaRef,       { threshold: 0.2  });

  // 404 — unknown slug
  if (!service) {
    return (
      <div className={styles.notFound}>
        <h1>Service not found</h1>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className={styles.page}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Background image */}
        <div className={styles.heroBg}>
          <img
            src={service.heroImage}
            alt={service.title}
            className={styles.heroBgImage}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Overlays */}
        <div className={styles.heroOverlayBase}   aria-hidden="true" />
        <div className={styles.heroOverlayLeft}   aria-hidden="true" />
        <div className={styles.heroOverlayBottom} aria-hidden="true" />

        {/* Back nav */}
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
          type="button"
          aria-label="Go back"
        >
          <ArrowLeft className={styles.backIcon} aria-hidden="true" />
          <span>Back</span>
        </button>

        {/* Hero text */}
        <div
          className={styles.heroContent}
          ref={heroTextRef}
          data-visible="false"
        >
          <div className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} aria-hidden="true" />
            <span className={styles.heroEyebrowText}>Lensscape · Services</span>
          </div>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroTagline}>{service.tagline}</p>
          <div className={styles.heroPriceTag}>
            <span className={styles.heroPriceLabel}>Starting from</span>
            <span className={styles.heroPrice}>{service.startingPrice}</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OVERVIEW + INCLUDES
      ══════════════════════════════════════════ */}
      <section
        className={styles.includesSection}
        ref={includesRef}
        data-visible="false"
        aria-labelledby="includes-heading"
      >
        <div className={styles.container}>
          <div className={styles.includesGrid}>

            {/* Description */}
            <div className={styles.overviewCol}>
              <span className={styles.sectionLabel} aria-hidden="true">Overview</span>
              <h2 id="includes-heading" className={styles.sectionTitle}>
                What This Service Covers
              </h2>
              <p className={styles.overviewText}>{service.description}</p>
            </div>

            {/* Includes list */}
            <div className={styles.includesCol}>
              <span className={styles.sectionLabel} aria-hidden="true">Included</span>
              <ul className={styles.includesList} aria-label="What's included">
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    className={styles.includesItem}
                    style={{ '--delay': `${i * 0.07}s` }}
                  >
                    <CheckCircle
                      className={styles.checkIcon}
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section
        className={styles.processSection}
        ref={processRef}
        data-visible="false"
        aria-labelledby="process-heading"
      >
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <span className={styles.sectionLabel} aria-hidden="true">How It Works</span>
            <h2 id="process-heading" className={styles.sectionTitle}>
              Our Process
            </h2>
          </div>

          <ol className={styles.processSteps} aria-label="Process steps">
            {service.process.map((step, i) => (
              <li
                key={i}
                className={styles.processStep}
                style={{ '--delay': `${i * 0.12}s` }}
              >
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.step}
                </span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
                {i < service.process.length - 1 && (
                  <ArrowRight
                    className={styles.stepArrow}
                    aria-hidden="true"
                    focusable="false"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY STRIP
      ══════════════════════════════════════════ */}
      <section
        className={styles.gallerySection}
        ref={galleryRef}
        data-visible="false"
        aria-labelledby="gallery-heading"
      >
        <div className={styles.container}>
          <span className={styles.sectionLabel} aria-hidden="true">Sample Work</span>
          <h2 id="gallery-heading" className={styles.sectionTitle}>
            From This Category
          </h2>
        </div>

        <div className={styles.galleryStrip}>
          {service.galleryImages.map((src, i) => (
            <div
              key={i}
              className={styles.galleryThumb}
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <img
                src={src}
                alt={`${service.title} sample ${i + 1} by Lensscape`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section
        className={styles.ctaSection}
        ref={ctaRef}
        data-visible="false"
        aria-labelledby="cta-heading"
      >
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <span className={styles.sectionLabel} aria-hidden="true">
                Ready to Begin?
              </span>
              <h2 id="cta-heading" className={styles.ctaTitle}>
                Let's Create Something{' '}
                <em className={styles.ctaTitleItalic}>Together</em>
              </h2>
              <p className={styles.ctaText}>
                Reach out to discuss your {service.title.toLowerCase()} project.
                We'll walk you through the process, answer every question, and
                build a package that fits your vision and your budget.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/#contact" className={styles.ctaPrimary}>
                  <span>Book a Consultation</span>
                  <ArrowRight
                    className={styles.ctaArrow}
                    aria-hidden="true"
                    focusable="false"
                  />
                </Link>
                <Link to="/portfolio" className={styles.ctaSecondary}>
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}