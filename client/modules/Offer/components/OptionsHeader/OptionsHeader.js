import React, { PropTypes, Component } from 'react';
import Select from 'react-select';

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
      <div>
        <h1>Escolha sua melhor opção</h1>
        <div>
          <p>Saídas:</p>
          <Select
            options={this.originsSelectOptions}
            value={this.props.visibility.origin}
            dispatch={this.props.dispatch}
            onChange={this.props.handleOriginSelect}
          />
        </div>
        <div>
          <p>Nº de diárias::</p>
          <Select options={this.dailiesSelectOptions} value="" onChange={this.handleChange} dispatch={this.props.dispatch} />
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
