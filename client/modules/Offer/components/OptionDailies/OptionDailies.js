import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';

import style from './OptionDailies.css';

function OptionDailies(props) {
  const option = props.option;

  return (
    <Col
      xs={6}
      md={2}
      className={style.Column}
    >
      <div className={style.Section}>
        <p>
          <span className={style.Dailies}>{option.daily}</span>
          {' '}
          <span className={style.Description}>
            Diária{parseInt(option.daily, 10) === 1 ? '' : 's'}
          </span>
        </p>
      </div>
    </Col>
  );
}

OptionDailies.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionDailies;
