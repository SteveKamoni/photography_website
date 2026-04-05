import React from 'react';
import { Award, Camera, Users } from 'lucide-react';
import styles from '../styles/About.module.scss';

const achievements = [
  { icon: Camera, number: '500+', label: 'Projects Completed' },
  { icon: Users, number: '350+', label: 'Happy Clients' },
  { icon: Award, number: '25+', label: 'Awards Won' },
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.decorativeBg} />
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxOTcyMzdsfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional photographer"
                className={styles.grayscale}
              />
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.header}>
              <p className={styles.label}>About Me</p>
              <h2 className={styles.title}>
                Crafting Visual Stories Since 2010
              </h2>
            </div>

            <div className={styles.textContent}>
              <p>
                With over a decade of experience in luxury photography, I've had the privilege 
                of capturing life's most precious moments for discerning clients worldwide. 
                My approach combines technical excellence with artistic vision, creating 
                timeless imagery that tells your unique story.
              </p>
              <p>
                Based in New York, my work has been featured in prestigious publications 
                including Vogue, Harper's Bazaar, and The New York Times. I believe that 
                every photograph should be a work of art, meticulously composed and 
                beautifully executed.
              </p>
              <p>
                Whether it's an intimate wedding, a high-profile corporate event, or a 
                personal portrait session, I bring the same level of passion and dedication 
                to every project.
              </p>
            </div>

            {/* Achievements */}
            <div className={styles.achievements}>
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className={styles.achievement}>
                    <Icon className={styles.achievementIcon} />
                    <p className={styles.achievementNumber}>
                      {achievement.number}
                    </p>
                    <p className={styles.achievementLabel}>{achievement.label}</p>
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
