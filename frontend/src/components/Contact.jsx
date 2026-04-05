import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import styles from '../styles/Contact.module.scss';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>
            Let's Create Together
          </h2>
          <p className={styles.description}>
            Ready to capture your story? Get in touch to discuss your project
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.label}>Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="commercial">Commercial Photography</option>
                  <option value="event">Event Photography</option>
                  <option value="fashion">Fashion Photography</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            {/* Email */}
            <div className={styles.infoCard}>
              <Mail className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href="mailto:hello@lenscape.com" className={styles.infoLink}>
                  hello@lenscape.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoCard}>
              <Phone className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Phone</h3>
                <a href="tel:+12125551234" className={styles.infoLink}>
                  +1 (212) 555-1234
                </a>
              </div>
            </div>

            {/* Location */}
            <div className={styles.infoCard}>
              <MapPin className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>
                  New York, NY<br />
                  United States
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.infoCard}>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink} aria-label="Instagram">
                    <Instagram />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Facebook">
                    <Facebook />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Twitter">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
