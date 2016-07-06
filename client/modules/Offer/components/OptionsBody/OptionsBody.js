import React, { PropTypes, Component } from 'react';

import Option from '../Option/Option';

class OptionsBody extends Component{
  componentWillMount() {
    this.props.offer.options = this.orderOptions(this.props.offer.options);
  }

  orderOptions(options) {
    const optionsClone = [...options]
    optionsClone.sort(function sortByPrice(a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
    return optionsClone;
  }

  render() {
    const { visibleOptions } = this.props;
    return (
      <div>
        {
          visibleOptions.map((option) => (
            <Option key={option.id} option={option} />
          ))
        }
      </div>
    );
  }
}

OptionsBody.propTypes = {
  offer: PropTypes.object.isRequired,
  visibleOptions: PropTypes.array.isRequired,
};

export default OptionsBody;
