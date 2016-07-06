import React, { PropTypes, Component } from 'react';

import Option from '../Option/Option';

class OptionsBody extends Component{
  componentWillMount() {
    this.visibleOptions = this.orderOptions(this.props.visibleOptions);
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
    return (
      <div>
        {
          this.visibleOptions.map((option) => (
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
