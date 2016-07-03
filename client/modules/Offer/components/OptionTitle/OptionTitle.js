import React, { PropTypes, Component } from 'react';

import style from './OptionTitle.css';

class OptionTitle extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={style.Section}>
        <h2 className={style.Title}>{option.title}</h2>
        <h3 className={style.Description}>{option.description}</h3>
      </div>
    );
  }
}

OptionTitle.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionTitle;
