import React, { PropTypes, Component } from 'react';

import Option from '../Option/Option';

class OptionsBody extends Component {
  render() {
    const offer = this.props.offer;

    return (
      <div>
        {
          this.props.visibleOptions.map((option) => (
            <Option option={option} />
          ))
        }
      </div>
    );
  }
}

OptionsBody.propTypes = {
  offer: PropTypes.object.isRequired,
  visibleOptions: PropTypes.array.isRequired,
};

export default OptionsBody;
