import React, { PropTypes, Component } from 'react';

import { Col } from 'react-bootstrap';

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
        md={3}
        className={style.Section}>
          <p>
            Por apenas:
            {' '}
            <span>
              R$ <span className={style.Price}>{this.formattedPrice}</span>
            </span>
            {' '}
            + taxas em até 10x
          </p>

          <button className={style.Confirm}>Quero ir</button>
      </Col>
    );
  }
}

OptionPrice.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionPrice;
