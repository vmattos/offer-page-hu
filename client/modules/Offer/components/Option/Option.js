import React, { PropTypes, Component } from 'react';

import OptionTitle from '../OptionTitle/OptionTitle';
import OptionOrigins from '../OptionOrigins/OptionOrigins';
import OptionDailies from '../OptionDailies/OptionDailies';
import OptionPrice from '../OptionPrice/OptionPrice';

class Option extends Component {
  render() {
    const option = this.props.option;
    return (
      <div>
        <OptionTitle option={option}/>

        <OptionOrigins option={option}/>

        <OptionDailies option={option}/>

        <OptionPrice option={option}/>
      </div>
    );
  }
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Option;
