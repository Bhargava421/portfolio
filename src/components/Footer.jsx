import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {currentYear} Bharagav C Salian. All rights reserved.</p>
    </footer>
  );
}

export default Footer;