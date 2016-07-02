import React, { PropTypes, Component } from 'react';

class DropDown extends Component {
  render() {
    return (
      <select>
        {
          this.props.options.map((options) => (
            <option value={options}>{options}</option>
          ))
        }
      </select>
    );
  }
}

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
};

export default DropDown;
