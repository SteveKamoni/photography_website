import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import styles from '../styles/Contact.module.scss';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a service type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

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
      // Simulating API call - replace with your actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
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
            Ready to capture your story? Get in touch to discuss your project and bring your vision to life
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.formSection} noValidate>
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <CheckCircle className={styles.statusIcon} />
                  <div>
                    <h4>Message Sent Successfully</h4>
                    <p>Thank you for reaching out! We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <AlertCircle className={styles.statusIcon} />
                  <div>
                    <h4>Oops! Something went wrong</h4>
                    <p>Please try again or contact us directly via email.</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name <span className={styles.required}>*</span>
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
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </div>

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
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
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              {/* Project Type Field */}
              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.label}>
                  Service Type <span className={styles.required}>*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={`${styles.select} ${errors.projectType ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="commercial">Commercial Photography</option>
                  <option value="event">Event Photography</option>
                  <option value="fashion">Fashion Photography</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <span className={styles.errorText}>{errors.projectType}</span>
                )}
              </div>

              {/* Message Field */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span className={styles.errorText}>{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            {/* Email */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.infoIcon} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href="mailto:hello@lensscape.com" className={styles.infoLink}>
                  hello@lensscape.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.infoIcon} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Phone</h3>
                <a href="tel:+12125551234" className={styles.infoLink}>
                  +1 (212) 555-1234
                </a>
              </div>
            </div>

            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.infoIcon} />
              </div>
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
                  <a href="#" className={styles.socialLink} aria-label="Instagram" title="Instagram">
                    <Instagram />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Facebook" title="Facebook">
                    <Facebook />
                  </a>
                  <a href="#" className={styles.socialLink} aria-label="Twitter" title="Twitter">
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

