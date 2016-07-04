import React, { PropTypes } from 'react';

import style from './OptionDailies.css';

function OptionDailies(props) {
  const option = props.option;

  return (
    <div className={style.Section}>
      <p>
        <span className={style.Dailies}>{option.daily}</span>
        {' '}
        <span className={style.Description}>
          Diária{parseInt(option.daily, 10) === 1 ? '' : 's'}
        </span>
      </p>
    </div>
  );
}

OptionDailies.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionDailies;
