import React, { PropTypes } from 'react';

// Import Style
import styles from './OfferListItem.css';

function OfferListItem(props) {
  return (
    <li
      className={styles.offerListItem}
      data-photo={props.offer.photos[0]}
    >
      <div className={styles.itemDescription}>
        <h2>{props.offer.title}</h2>
        <h3>{props.offer.location}</h3>
        <h3 className={styles.price}>R$ {props.offer.options[0].price}</h3>
      </div>
    </li>
  );
}

OfferListItem.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default OfferListItem;
