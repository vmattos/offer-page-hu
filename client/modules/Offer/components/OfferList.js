import React, { PropTypes } from 'react';

// Import Components
import OfferListItem from './OfferListItem/OfferListItem';

function OfferList(props) {
  return (
    <ul className="listView">
      {
        props.offers.map(offer => (
          <OfferListItem offer={offer} />
        ))
      }
    </ul>
  );
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
