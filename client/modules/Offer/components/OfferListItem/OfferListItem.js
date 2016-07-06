import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import { Col } from 'react-bootstrap';

import styles from './OfferListItem.css';

function OfferListItem(props) {
  const linkLocation = `/offers/${props.offer.id}`;

  return (
    <Link to={linkLocation}>
      <Col
        sm={6}
        md={4}
      >
        <div
          className={styles.offerListItem}
          data-photo={props.offer.photos[0]}
        >
          <div className={styles.itemDescription}>
            <h2>{props.offer.title}</h2>
            <h3>{props.offer.location}</h3>
            <h3 className={styles.price}>R$ {props.offer.options[0].price}</h3>
          </div>
        </div>
      </Col>
    </Link>
  );
}

OfferListItem.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default OfferListItem;
