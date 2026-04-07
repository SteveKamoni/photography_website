import React, { useEffect, useRef } from 'react';
import { Award, Camera, Users } from 'lucide-react';
import styles from '../styles/About.module.scss';

const achievements = [
  { icon: Camera, number: '800+', label: 'Sessions Delivered' },
  { icon: Users, number: '350+', label: 'Happy Clients'      },
  { icon: Award, number: '4',    label: 'Awards Won'         },
];

// ── Reusable hook: fires a callback once when element enters viewport ──
function useRevealOnScroll(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion — skip observer, just make visible
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.visible = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = 'true';
          observer.unobserve(entry.target); // fire once only
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export function About() {
  const imageRef       = useRef(null);
  const labelRef       = useRef(null);
  const titleRef       = useRef(null);
  const para1Ref       = useRef(null);
  const para2Ref       = useRef(null);
  const para3Ref       = useRef(null);
  const achievementsRef = useRef(null);

  useRevealOnScroll(imageRef,        { threshold: 0.12 });
  useRevealOnScroll(labelRef,        { threshold: 0.2  });
  useRevealOnScroll(titleRef,        { threshold: 0.2  });
  useRevealOnScroll(para1Ref,        { threshold: 0.2  });
  useRevealOnScroll(para2Ref,        { threshold: 0.2  });
  useRevealOnScroll(para3Ref,        { threshold: 0.2  });
  useRevealOnScroll(achievementsRef, { threshold: 0.2  });

  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: Image ─────────────────────────── */}
          <div className={styles.imageWrapper} ref={imageRef}>
            <div className={styles.decorativeBg} aria-hidden="true" />
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxOTcyMzdsfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lensscape founder and lead photographer at work"
                className={styles.grayscale}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* ── Right: Content ──────────────────────── */}
          <div className={styles.content}>

            <div className={styles.header}>
              <p
                className={styles.label}
                ref={labelRef}
                data-visible="false"
              >
                About Us
              </p>
              <h2
                id="about-heading"
                className={styles.title}
                ref={titleRef}
                data-visible="false"
              >
                Crafting Visual Stories Since 2018
              </h2>
            </div>

            <div className={styles.textContent}>
              <p ref={para1Ref} data-visible="false">
                With over a decade of combined experience in fine-art and luxury photography,
                the Lensscape team has had the privilege of capturing life's most precious
                moments for discerning clients across Kenya and beyond. Our approach marries
                technical precision with a deeply personal artistic vision.
              </p>
              <p ref={para2Ref} data-visible="false">
                Based in Nairobi, our work has been recognised at regional and international
                levels — featured in leading lifestyle and editorial publications and honoured
                with four industry awards. We believe every photograph should stand as a work
                of art: meticulously composed, beautifully executed, and lasting a lifetime.
              </p>
              <p ref={para3Ref} data-visible="false">
                Whether it's an intimate wedding in the Rift Valley, a high-profile brand
                campaign, or a personal portrait session in the city, we bring the same
                level of passion and dedication to every frame.
              </p>
            </div>

            {/* ── Achievements ──────────────────────── */}
            <div
              className={styles.achievements}
              ref={achievementsRef}
              data-visible="false"
            >
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={styles.achievement}
                    style={{ '--delay': `${index * 0.12}s` }}
                  >
                    <Icon
                      className={styles.achievementIcon}
                      aria-hidden="true"
                      focusable="false"
                    />
                    <p className={styles.achievementNumber}>{item.number}</p>
                    <p className={styles.achievementLabel}>{item.label}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}