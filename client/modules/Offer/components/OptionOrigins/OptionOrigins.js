import React, { PropTypes, Component } from 'react';

class OptionOrigins extends Component {
  render() {
    const option = this.props.option;

    return (
      <div>
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
