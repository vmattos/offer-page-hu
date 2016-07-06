import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Components
import { Row } from 'react-bootstrap';

import OfferListItem from './OfferListItem/OfferListItem';

import styles from './OfferList.css';

function OfferList(props) {
  return (
    <div>
      <h1 className={styles.title}><FormattedMessage id="offerListTitle" /></h1>
      <Row className={styles.offerList}>
        {
          props.offers.map(offer => (
            <OfferListItem key={offer.id} offer={offer} />
          ))
        }
      </Row>
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
