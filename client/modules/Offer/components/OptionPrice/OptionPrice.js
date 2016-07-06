import React, { PropTypes, Component } from 'react';

import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import style from './OptionPrice.css';

class OptionPrice extends Component {
  componentWillMount() {
    this.formattedPrice = this.formatPrice(this.props.option.price);
  }

  formatPrice(price) {
    return price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  render() {
    return (
      <Col
        xs={12}
        md={2}
      >
        <div className={style.Section}>
          <p>
            <FormattedMessage id="option.price.head" />
            {' '}
            <span className={style.PriceTag}>
              <FormattedMessage id="option.price.monetaryUnit" />
              {' '}
              <span className={style.Value}>{this.formattedPrice}</span>
            </span>
            {' '}
            <FormattedMessage id="option.price.taxes" />
          </p>
          <button className={style.Confirm}>
            <FormattedMessage id="option.price.confirm" />
          </button>
        </div>
      </Col>
    );
  }
}

OptionPrice.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionPrice;
