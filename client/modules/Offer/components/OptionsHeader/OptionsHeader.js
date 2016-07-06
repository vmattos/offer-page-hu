import React, { PropTypes, Component } from 'react';
import Select from 'react-select';

import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import style from './OptionsHeader.css';

class OptionsHeader extends Component {
  componentWillMount() {
    const availableOrigins = this.props.originLocations;
    const availableDailies = this.props.availableDailies;

    this.originsSelectOptions = this.mountSelectOptions(availableOrigins);
    this.dailiesSelectOptions = this.mountSelectOptions(availableDailies);
  }

  mountSelectOptions(list) {
    return list.map((o) => { return { value: o, label: o }; });
  }

  render() {
    return (
      <Row className={style.Header}>
        <Col
          xs={12}
          sm={6}
        >
          <h1 className={style.Title}>
            <FormattedMessage id="option.header.title" />
          </h1>
        </Col>
        <Col
          xs={12}
          sm={3}
          className={style.OriginSelector}
        >
          <p>
            <FormattedMessage id="option.header.origins" />
          </p>
          <Select
            className={style.Select}
            options={this.originsSelectOptions}
            value={this.props.visibility.origin}
            dispatch={this.props.dispatch}
            onChange={this.props.handleOriginSelect}
          />
        </Col>
        <Col
          xs={12}
          sm={3}
          className={style.DailySelector}
        >
          <p>
            <FormattedMessage id="option.header.dailies" />
          </p>
          <Select
            className={style.Select}
            options={this.dailiesSelectOptions}
            value={this.props.visibility.daily}
            dispatch={this.props.dispatch}
            onChange={this.props.handleDailySelect}
          />
        </Col>
      </Row>
    );
  }
}

OptionsHeader.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
  availableDailies: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  visibility: PropTypes.object.isRequired,
  handleDailySelect: PropTypes.func.isRequired,
  handleOriginSelect: PropTypes.func.isRequired,
};

export default OptionsHeader;
