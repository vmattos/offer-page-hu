import React, { PropTypes } from 'react';

import OptionsHeader from '../OptionsHeader/OptionsHeader';
import OptionsBody from '../OptionsBody/OptionsBody';

function OfferOptions(props) {
  const offer = props.offer;

  return (
    <div>
      <OptionsHeader {...props} />

      <OptionsBody {...props} />
    </div>
  );
}

OfferOptions.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
};

export default OfferOptions;
