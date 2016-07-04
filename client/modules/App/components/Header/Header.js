import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header(props, context) { // eslint-disable-line
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <Link className={styles.header} to="/">
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes}
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <FormattedMessage id="siteTitle" />
        </h1>
        <h3 className={styles['site-subtitle']}>
          <FormattedMessage id="subtitle" />
        </h3>
      </div>
    </Link>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
