import React, { PropTypes } from 'react';

import OptionsHeader from '../OptionsHeader/OptionsHeader';
import OptionsBody from '../OptionsBody/OptionsBody';

function OfferOptions() {
  return (
    <div>
      <OptionsHeader {...this.props} />

      <OptionsBody {...this.props} />
    </div>
  );
}

OfferOptions.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
};

export default OfferOptions;
