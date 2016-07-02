import React, { PropTypes, Component } from 'react';

import OptionTitle from '../OptionTitle/OptionTitle';

class Option extends Component {
  render() {
    const option = this.props.option;
    return (
      <div>
        <OptionTitle option={option}/>

        <div>
          <h2>Saídas:</h2>
          {
            option.from.map((origin) => (
              <p>{origin}</p>
            ))
          }
        </div>

        <div>
          <p>{option.daily} diária{option.daily == 1 ? '' : 's'}</p>
        </div>

        <div>
          <p>Por apenas:</p>
          <p>R$ <span>{option.price}</span></p>
        </div>
      </div>
    );
  }
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Option;
