import React, { PropTypes, Component } from 'react';
import Select from 'react-select';

class OptionsHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const availableOrigins = this.props.originLocations;
    const availableDailies = this.getAvailableDailies(this.props.offer);

    this.originsSelectOptions = this.mountSelectOptions(availableOrigins);
    this.dailiesSelectOptions = this.mountSelectOptions(availableDailies);
  }

  getAvailableDailies(offer) {
    return this.getUniqueItems(
      this.reduceDailies(offer)
    );
  }

  reduceDailies(offer) {
    return offer.options.reduce((p, o) => [...p, o.daily], []);
  }

  getUniqueItems(list) {
    return list.reduce((p, o) => p.indexOf(o) === -1 ? [...p, o] : p, [] );
  }

  mountSelectOptions(list) {
    return list.map((o) => {return {value: o, label: o}});
  }

  handleChange(value) {
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>Escolha sua melhor opção</h1>
        <div>
          <p>Saídas:</p>
          <Select options={this.originsSelectOptions} value="" dispatch={this.props.dispatch} />
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
};

OptionsHeader.contextTypes = {
  dispatch: PropTypes.object.isRequired,
}

export default OptionsHeader;
