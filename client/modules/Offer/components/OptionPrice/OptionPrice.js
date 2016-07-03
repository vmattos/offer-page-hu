import React, { PropTypes, Component } from 'react';

import style from './OptionPrice.css';

class OptionPrice extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={style.Section}>
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
