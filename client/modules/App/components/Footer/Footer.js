import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p><FormattedMessage id="twitterMessage" /></p>
    </div>
  );
}

export default Footer;
