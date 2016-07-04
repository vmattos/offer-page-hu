import React, { PropTypes } from 'react';

import OptionTitle from '../OptionTitle/OptionTitle';
import OptionOrigins from '../OptionOrigins/OptionOrigins';
import OptionDailies from '../OptionDailies/OptionDailies';
import OptionPrice from '../OptionPrice/OptionPrice';

import style from '../Option/Option.css';

function Option() {
  const option = this.props.option;
  return (
    <div className={style.Option}>
      <OptionTitle option={option} />

      <OptionOrigins option={option} />

      <OptionDailies option={option} />

      <OptionPrice option={option} />
    </div>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Option;
