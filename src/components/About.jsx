import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <div> {/* Wrap text in a div for better flex control */}
          <p>
            Hello! I'm Bhargava C Salian, a passionate student and aspiring web developer based in Karkala.
            I love creating engaging, responsive, and user-friendly web experiences that combine creativity with functionality. As a student, I'm constantly learning and exploring the ever-evolving world of web development, driven by curiosity and a desire to build impactful digital solutions.

            I'm skilled in HTML, CSS, JavaScript, and currently diving deeper into frameworks like React and styling tools like Tailwind CSS. I enjoy bringing ideas to life through clean, efficient code and intuitive design.

            Outside of coding, I’m always exploring new technologies, working on personal projects, and improving my problem-solving skills. I believe in continuous growth and am excited about contributing to real-world projects and collaborating with like-minded developers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;