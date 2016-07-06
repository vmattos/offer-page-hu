import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';

import style from './OptionTitle.css';

function OptionTitle(props) {
  const option = props.option;

  return (
    <Col
      xs={12}
      md={6}
      className={style.Column}
    >
      <div className={style.Section}>
        <h2 className={style.Title}>{option.title}</h2>
        <h3 className={style.Description}>{option.description}</h3>
      </div>
    </Col>
  );
}

OptionTitle.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionTitle;
