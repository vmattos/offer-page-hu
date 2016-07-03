import React, { PropTypes, Component } from 'react';

import style from './OptionDailies.css'

class OptionDailies extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={style.Section}>
        <p>{option.daily} diária{option.daily == 1 ? '' : 's'}</p>
      </div>
    );
  }
}

OptionDailies.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionDailies;
