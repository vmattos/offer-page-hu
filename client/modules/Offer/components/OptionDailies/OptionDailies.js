import React, { PropTypes, Component } from 'react';

import style from './OptionDailies.css'

class OptionDailies extends Component {
  render() {
    const option = this.props.option;

    const glyphClasses = 'glyphicon glyphicon-calendar';

    return (
      <div className={style.Section}>
        <p>
          <span className={style.Dailies}>{option.daily}</span>
          {' '}
          <span className={style.Description}>
            Diária{option.daily == 1 ? '' : 's'}
          </span>
        </p>
      </div>
    );
  }
}

OptionDailies.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionDailies;
