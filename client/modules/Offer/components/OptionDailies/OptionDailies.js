import React, { PropTypes, Component } from 'react';

import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import style from './OptionDailies.css';

class OptionDailies extends Component {

  componentWillMount() {
    this.description = this.mountDescription(this.props.option.daily);
  }

  mountDescription(daily) {
    const single = parseInt(daily, 10) === 1;
    if (single) {
      return (
        <FormattedMessage id="option.dailies.singleDay" />
      );
    }
    return (
      <FormattedMessage id="option.dailies.dailies" />
    );
  }

  render() {
    const  { option }= this.props;

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
              {this.description}
            </span>
          </p>
        </div>
      </Col>
    );
  }
}

OptionDailies.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionDailies;
