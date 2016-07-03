import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import OfferTitle from '../../components/OfferTitle/OfferTitle'
import OfferOptions from '../../components/OfferOptions/OfferOptions'

import styles from './OfferDetailsPage.css';

// Import Actions
import { fetchOffer } from '../../OfferActions';
import { setOriginFilter, setDailyFilter } from '../../VisibilityActions';

// Import Selectors
import { getOffer } from '../../OfferReducer';
import { getVisibility } from '../../VisibilityReducer';

class OfferDetailsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.originLocations = this.getOriginLocations(this.props.offer);
    this.availableDailies = this.getAvailableDailies(this.props.offer);
  }

  componentDidMount() {
    this.props.dispatch(fetchOffer(this.props.offer.id))
  }

  getOriginLocations(offer) {
    return this.getUniqueItems(
      this.reduceOrigins(offer)
    );
  }

  getAvailableDailies(offer) {
    return this.getUniqueItems(
      this.reduceDailies(offer)
    );
  }

  handleOriginSelect(value) {
    this.dispatch(setOriginFilter(value));
  }

  handleDailySelect(value) {
    this.dispatch(setDailyFilter(value));
  }

  render() {
    const offer = this.props.offer;
    return (
      <div className={styles.container}>
        <OfferTitle
          originLocations={this.originLocations.length}
          offer={offer}
          {...this.props}
        />

        <OfferOptions
          offer={offer}
          originLocations={this.originLocations}
          availableDailies={this.availableDailies}
          handleOriginSelect={this.handleOriginSelect}
          handleDailySelect={this.handleDailySelect}
          {...this.props}
        />
      </div>
    );
  }

  // Helper functions
  reduceDailies(offer) {
    return offer.options.reduce((p, o) => [...p, o.daily], []);
  }

  reduceOrigins(offer) {
    return offer.options.reduce((p, o) => [...p, ...o.from], []);
  }

  getUniqueItems(list) {
    return list.reduce((p, o) => p.indexOf(o) === -1 ? [...p, o] : p, [] );
  }
}

// Actions required to provide data for this component to render in sever side.
OfferDetailsPage.need = [params => {
  return fetchOffer(params.id);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    offer: getOffer(state, props.params.id),
    visibility: getVisibility(state),
  };
}

OfferDetailsPage.propTypes = {
  offer: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

OfferDetailsPage.contextTypes = {
  router: React.PropTypes.object,
}

export default connect(mapStateToProps)(OfferDetailsPage);
