import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <div className={styles.contactInfo}>
         <p>Email: <a href="mailto:bhargavacsalian566@gmail.com">bhargavacsalian566@gmail.com</a></p>
      </div>
      <div className={styles.socialLinks}>
         <a href="https://www.linkedin.com/in/bhargava-c-salian-263084308" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         <span> | </span>
         <a href="https://github.com/Bhargava421" target="_blank" rel="noopener noreferrer">GitHub</a>
         
      </div>
       
    </section>
  );
}

export default Contact;