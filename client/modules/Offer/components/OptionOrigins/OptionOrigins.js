import React, { PropTypes } from 'react';

import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import style from './OptionOrigins.css';

function OptionOrigins(props) {
  const { option } = props;

  return (
    <Col
      xs={6}
      md={2}
      className={style.Column}
    >
      <div className={style.Section}>
        <h2 className={style.Title}>
          <FormattedMessage id="option.origins.origins" />
        </h2>
        <div className={style.Origins}>
          {
            option.from.map((origin) => (
              <p key={origin} className={style.Origin}>{origin}</p>
            ))
          }
        </div>
      </div>
    </Col>
  );
}

OptionOrigins.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionOrigins;
