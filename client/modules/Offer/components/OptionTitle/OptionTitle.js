import React, { PropTypes, Component } from 'react';

import optionStyle from '../Option/Option.css'

class OptionTitle extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={optionStyle.Section}>
        <h2>{option.title}</h2>
        <h3>{option.description}</h3>
      </div>
    );
  }
}

OptionTitle.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionTitle;
