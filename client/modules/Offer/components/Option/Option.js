import React, { PropTypes, Component } from 'react';

import OptionTitle from '../OptionTitle/OptionTitle';
import OptionOrigins from '../OptionOrigins/OptionOrigins';

class Option extends Component {
  render() {
    const option = this.props.option;
    return (
      <div>
        <OptionTitle option={option}/>

        <OptionOrigins option={option}/>

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
