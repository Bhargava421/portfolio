import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Welcome, I'm Bhargava C Salian</h1>
        <p>Computer Science & Engineering Student</p>
        <p>
          Passionate about Web Development and Technology and always eager to learn more. Explore my work and connect with me!
        </p>
      </div>

      <div className={styles.heroImageContainer}>
        <img
          src="src/images/Profile.jpg"
          alt="Bhargava C Salian - Profile Picture"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}

export default Hero;