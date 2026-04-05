import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.scss';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1684244177286-8625c54bce6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHByZXBhcmF0aW9uJTIwZGV0YWlsc3xlbnwxfHx8fDE3NjgyMDcyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Bride preparation details',
    tall: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzdW5zZXQlMjByb21hbnRpY3xlbnwxfHx8fDE3NjgyMDcyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Romantic couple at sunset',
    tall: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3NjgyMDcyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Luxury interior design',
    tall: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1751552147802-fda131627843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjgyMDcyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Jewelry close-up',
    tall: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxMTIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Elegant woman portrait',
    tall: true,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODE2NTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Business professional headshot',
    tall: false,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1636969386919-b90cad8216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc2ODE3ODQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Modern architecture',
    tall: false,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1618239265038-9e4c865fbd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm91cXVldCUyMG1pbmltYWx8ZW58MXx8fHwxNzY4MjA3MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Minimal flowers bouquet',
    tall: false,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Portfolio Gallery</span>
          <h2 className={styles.title}>
            Visual Excellence
          </h2>
          <p className={styles.description}>
            An inspiring collection of our most celebrated photography work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${styles.galleryItem} ${image.tall ? styles.tall : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
