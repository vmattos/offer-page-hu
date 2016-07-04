import React, { PropTypes } from 'react';

import style from './OptionOrigins.css';

function OptionOrigins(props) {
  const option = props.option;

  return (
    <div className={style.Section}>
      <h2 className={style.Title}>Saídas:</h2>
      {
        option.from.map((origin) => (
          <p key={origin} className={style.Origin}>{origin}</p>
        ))
      }
    </div>
  );
}

OptionOrigins.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionOrigins;
