import React, { PropTypes } from 'react';

// Import Style

function OfferListItem(props) {
  return (
    <li>
      {props.offer.title}, {props.offer.location}
    </li>
  );
}

OfferListItem.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default OfferListItem;
