import React from 'react';
import { Heart, UserCircle, Building2, Calendar, Camera, Sparkles } from 'lucide-react';
import styles from '../styles/Services.module.scss';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion. From intimate ceremonies to grand celebrations, I document every precious moment.',
    image: 'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE5NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: UserCircle,
    title: 'Portrait Photography',
    description: 'Professional portraits that capture your essence. Perfect for executives, artists, and individuals seeking timeless imagery.',
    image: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODIwNzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Building2,
    title: 'Commercial Photography',
    description: 'Elevate your brand with stunning commercial imagery. Product photography, corporate events, and architectural shoots.',
    image: 'https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY4MTcxODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Calendar,
    title: 'Event Photography',
    description: 'Comprehensive event coverage from corporate galas to private celebrations. Capturing the energy and atmosphere of your event.',
    image: 'https://images.unsplash.com/photo-1658063715878-bff71ed96a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4MjA3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Camera,
    title: 'Fashion Photography',
    description: 'Editorial and commercial fashion photography with a luxury aesthetic. Bringing style and sophistication to every frame.',
    image: 'https://images.unsplash.com/photo-1717766293792-e78ea97e9d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY4MTI2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sparkles,
    title: 'Lifestyle Photography',
    description: 'Authentic lifestyle imagery that tells your story. From family sessions to personal branding, capturing genuine moments.',
    image: 'https://images.unsplash.com/photo-1724866525512-5658ee2e2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeSUyMGhvbWV8ZW58MXx8fHwxNzY4MjA3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Services</span>
          <h2 className={styles.title}>
            Photography Services
          </h2>
          <p className={styles.description}>
            Specialized photography services tailored to capture your vision with 
            precision and artistry
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                  <Icon className={styles.serviceIcon} />
                </div>
                
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>
                    {service.title}
                  </h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <button className={styles.serviceLink}>
                    Learn More
                    <svg 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
