import React, { PropTypes, Component } from 'react';

import Option from '../Option/Option';

class OptionsBody extends Component{
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
