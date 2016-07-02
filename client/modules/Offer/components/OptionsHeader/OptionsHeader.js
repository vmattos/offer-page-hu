import React, { PropTypes, Component } from 'react';

class OptionsHeader extends Component {
  componentWillMount() {
    this.availableDailies = this.getAvailableDailies(this.props.offer);
  }

  getAvailableDailies(offer) {
    return offer.options
      .reduce((p, o) => [...p, o.daily], [])
      .reduce((p, o) => p.indexOf(o) === -1 ? [...p, o] : p, [] );
  }

  render() {
    return (
      <div>
        <h1>Escolha sua melhor opção</h1>
        <div>
          <p>Saídas:</p>
          <select>
            {
              this.props.originLocations.map((location) => (
                <option value={location}>{location}</option>
              ))
            }
          </select>
        </div>
        <div>
          <p>Nº de diárias::</p>
          <select>
            {
              this.availableDailies.map((daily) => (
                <option value={daily}>{daily}</option>
              ))
            }
          </select>
        </div>
      </div>
    );
  }
}

OptionsHeader.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
};

export default OptionsHeader;
