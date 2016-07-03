import React, { PropTypes, Component } from 'react';
import Select from 'react-select';

import style from './OptionsHeader.css';

class OptionsHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const availableOrigins = this.props.originLocations;
    const availableDailies = this.props.availableDailies;

    this.originsSelectOptions = this.mountSelectOptions(availableOrigins);
    this.dailiesSelectOptions = this.mountSelectOptions(availableDailies);
  }

  mountSelectOptions(list) {
    return list.map((o) => {return {value: o, label: o}});
  }

  render() {
    return (
      <div className={style.Header}>
        <h1 className={style.Title}>Escolha sua melhor opção</h1>
        <div className={style.OriginSelector}>
          <p>Saídas:</p>
          <Select
            className={style.Select}
            options={this.originsSelectOptions}
            value={this.props.visibility.origin}
            dispatch={this.props.dispatch}
            onChange={this.props.handleOriginSelect}
          />
        </div>
        <div className={style.DailySelector}>
          <p>Nº de diárias::</p>
          <Select
            className={style.Select}
            options={this.dailiesSelectOptions}
            value={this.props.visibility.daily}
            dispatch={this.props.dispatch}
            onChange={this.props.handleDailySelect}
          />
        </div>
      </div>
    );
  }
}

OptionsHeader.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  visibility: PropTypes.object.isRequired,
};

export default OptionsHeader;
