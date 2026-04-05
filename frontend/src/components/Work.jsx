import React, { useState } from 'react';
import styles from '../styles/Work.module.scss';

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Autumn Wedding',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1765350226723-a96ab0705403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW4nJTIwY291cGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgxOTQzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A timeless celebration captured in golden hour light',
  },
  {
    id: 2,
    title: 'Executive Portraits',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjgyMDcxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Corporate photography that conveys leadership and vision',
  },
  {
    id: 3,
    title: 'Luxury Timepiece Collection',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwd2F0Y2h8ZW58MXx8fHwxNzY4MTg1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Product photography showcasing exquisite craftsmanship',
  },
  {
    id: 4,
    title: 'Fashion Editorial',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1700150595270-499a1ce07804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY4MTY3NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'High fashion meets artistic expression',
  },
  {
    id: 5,
    title: 'Architectural Elegance',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1648917861061-5329e39b118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODIwNzExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Capturing modern design and structure',
  },
  {
    id: 6,
    title: 'Natural Beauty',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1494782611507-95b6d139e677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY4MjA3MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Outdoor lifestyle photography in natural settings',
  },
];

export function Work() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>
            Featured Work
          </h2>
          <p className={styles.description}>
            A curated selection of recent projects showcasing diverse styles and subjects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={styles.portfolioItem}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
              />

              {/* Overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayText}>
                    <p className={styles.portfolioCategory}>
                      {item.category}
                    </p>
                    <h3 className={styles.portfolioTitle}>
                      {item.title}
                    </h3>
                    <p className={styles.portfolioDescription}>
                      {item.description}
                    </p>
                    <button className={styles.portfolioLink}>
                      View Project
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
              </div>

              {/* Border accent on hover */}
              <div className={styles.borderAccent} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={styles.viewAllButton}>
          <button className={styles.buttonWrapper}>
            <span>View Full Portfolio</span>
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
    </section>
  );
}
