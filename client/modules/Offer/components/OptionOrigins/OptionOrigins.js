import React, { PropTypes, Component } from 'react';

import style from './OptionOrigins.css';

class OptionOrigins extends Component {
  render() {
    const option = this.props.option;

    return (
      <div className={style.Section}>
        <h2 className={style.Title}>Saídas:</h2>
        {
          option.from.map((origin) => (
            <p className={style.Origin}>{origin}</p>
          ))
        }
      </div>
    );
  }
}

OptionOrigins.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionOrigins;
