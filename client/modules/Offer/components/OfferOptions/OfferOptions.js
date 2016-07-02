import React, { PropTypes, Component } from 'react';

import OptionsHeader from '../OptionsHeader/OptionsHeader';
import OptionsBody from '../OptionsBody/OptionsBody';

class OfferOptions extends Component {
  constructor(props) {
    super(props);
    console.log(this)
  }

  render() {
    return (
      <div>
        <OptionsHeader {...this.props} />

        <OptionsBody {...this.props} />
      </div>
    );
  }
}

OfferOptions.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
};

export default OfferOptions;
