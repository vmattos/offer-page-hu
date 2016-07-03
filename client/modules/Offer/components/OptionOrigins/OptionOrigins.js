import React, { PropTypes, Component } from 'react';

import optionStyle from '../Option/Option.css';

class OptionOrigins extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={optionStyle.Section}>
        <h2>Saídas:</h2>
        {
          option.from.map((origin) => (
            <p>{origin}</p>
          ))
        }
      </div>
    );
  }
}

OptionOrigins.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionOrigins;
