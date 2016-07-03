import React, { PropTypes, Component } from 'react';

import optionStyle from '../Option/Option.css';

class OptionPrice extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={optionStyle.Section}>
        <p>Por apenas:</p>
        <p>R$ <span>{option.price}</span></p>
      </div>
    );
  }
}

OptionPrice.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionPrice;
