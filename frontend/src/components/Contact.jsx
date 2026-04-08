import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin,
  Instagram, Facebook, Twitter,
  CheckCircle, AlertCircle,
} from 'lucide-react';
import styles from '../styles/Contact.module.scss';

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

// ── Contact info items ────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a href="mailto:hello@lensscape.co.ke" className={styles.infoLink}>
        hello@lensscape.co.ke
      </a>
    ),
  },
  {
    icon: Phone,
    title: 'Phone',
    content: (
      <a href="tel:+254700000000" className={styles.infoLink}>
        +254 700 000 000
      </a>
    ),
  },
  {
    icon: MapPin,
    title: 'Location',
    content: (
      <p className={styles.infoText}>
        Nairobi, Kenya<br />
        Available for travel nationwide
      </p>
    ),
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitStatus, setSubmitStatus]   = useState(null); // 'success' | 'error'
  const [errors, setErrors]               = useState({});

  // ── Scroll reveal refs ────────────────────────────────
  const headerRef = useRef(null);
  const formRef   = useRef(null);
  const infoRef   = useRef(null);

  useRevealOnScroll(headerRef, { threshold: 0.2  });
  useRevealOnScroll(formRef,   { threshold: 0.12 });
  useRevealOnScroll(infoRef,   { threshold: 0.12 });

  // ── Validation ────────────────────────────────────────
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = 'Name is required';
    if (!formData.email.trim())
      newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.projectType)
      newErrors.projectType = 'Please select a service type';
    if (!formData.message.trim())
      newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  // ── Submit ────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus(null);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // Replace with your actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Field change ──────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>

        {/* ── Header ──────────────────────────────────── */}
        <header
          className={styles.header}
          ref={headerRef}
          data-visible="false"
        >
          <span className={styles.sectionLabel} aria-hidden="true">Contact</span>
          <h2 id="contact-heading" className={styles.title}>
            Let's Create Together
          </h2>
          <p className={styles.description}>
            Ready to capture your story? Get in touch to discuss your project
            and bring your vision to life.
          </p>
        </header>

        <div className={styles.grid}>

          {/* ── Form column ─────────────────────────── */}
          <div
            className={styles.formContainer}
            ref={formRef}
            data-visible="false"
          >
            <form
              onSubmit={handleSubmit}
              className={styles.formSection}
              noValidate
              aria-label="Contact form"
            >
              {/* Success */}
              {submitStatus === 'success' && (
                <div className={styles.successMessage} role="alert">
                  <CheckCircle className={styles.statusIcon} aria-hidden="true" />
                  <div>
                    <h4>Message Sent Successfully</h4>
                    <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Error */}
              {submitStatus === 'error' && (
                <div className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.statusIcon} aria-hidden="true" />
                  <div>
                    <h4>Something went wrong</h4>
                    <p>Please try again or reach us directly at hello@lensscape.co.ke</p>
                  </div>
                </div>
              )}

              {/* Name */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.fieldLabel}>
                  Name <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  autoComplete="name"
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorText} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.fieldLabel}>
                  Email <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email && (
                  <span id="email-error" className={styles.errorText} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Project type */}
              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.fieldLabel}>
                  Service Type <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={`${styles.select} ${errors.projectType ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  aria-invalid={!!errors.projectType}
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="commercial">Commercial Photography</option>
                  <option value="event">Event Photography</option>
                  <option value="fashion">Fashion Photography</option>
                  <option value="lifestyle">Lifestyle Photography</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <span id="projectType-error" className={styles.errorText} role="alert">
                    {errors.projectType}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.fieldLabel}>
                  Message <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project — the occasion, location, style, and any details that matter to you."
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span id="message-error" className={styles.errorText} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* ── Info column ──────────────────────────── */}
          <div
            className={styles.infoSection}
            ref={infoRef}
            data-visible="false"
          >
            {contactInfo.map(({ icon: Icon, title, content }) => (
              <div key={title} className={styles.infoCard}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon className={styles.infoIcon} aria-hidden="true" focusable="false" />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>{title}</h3>
                  {content}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className={styles.infoCard}>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  {[
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Facebook, label:  'Facebook'  },
                    { Icon: Twitter,  label:  'Twitter'   },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className={styles.socialLink}
                      aria-label={`Lensscape on ${label}`}
                    >
                      <Icon aria-hidden="true" focusable="false" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}