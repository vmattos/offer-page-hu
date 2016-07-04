import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import OfferTitle from '../../components/OfferTitle/OfferTitle';
import OfferOptions from '../../components/OfferOptions/OfferOptions';
import OfferImages from '../../components/OfferImages/OfferImages';

import styles from './OfferDetailsPage.css';

// Import Actions
import { fetchOffer } from '../../OfferActions';
import { setOriginFilter, setDailyFilter } from '../../VisibilityActions';

// Import Selectors
import { getOffer } from '../../OfferReducer';
import { getVisibility } from '../../VisibilityReducer';

class OfferDetailsPage extends Component {
  componentWillMount() {
    this.originLocations = this.getOriginLocations(this.props.offer);
    this.availableDailies = this.getAvailableDailies(this.props.offer);
    this.images = this.loadImages(this.props.offer.photos);
  }

  componentDidMount() {
    this.props.dispatch(fetchOffer(this.props.offer.id));
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

  getVisibleOptions(offer) {
    return this.filterOptionsByDaily(
      this.filterOptionsByOrigin(offer.options)
    );
  }

  getUniqueItems(list) {
    return list.reduce((p, o) => { return p.indexOf(o) === -1 ? [...p, o] : p; }, []);
  }

  // Helper functions
  reduceDailies(offer) {
    return offer.options.reduce((p, o) => [...p, o.daily], []);
  }

  reduceOrigins(offer) {
    return offer.options.reduce((p, o) => [...p, ...o.from], []);
  }

  handleOriginSelect(value) {
    this.dispatch(setOriginFilter(value));
  }

  handleDailySelect(value) {
    this.dispatch(setDailyFilter(value));
  }

  filterOptionsByDaily(options) {
    try {
      const daily = this.props.visibility.daily.value;
      if (!daily || daily === '') return options;
      return options.filter((o) => parseInt(o.daily, 10) === daily);
    } catch(e) {
      return options
    }
  }

  filterOptionsByOrigin(options) {
    try {
      const origin = this.props.visibility.origin.value;
      if (!origin || origin === '') return options;
      return options.filter((o) => parseInt(o.from.indexOf(origin), 10) !== -1);
    } catch(e) {
      return options;
    }
  }

  loadImages(photos) {
    // Webpack has a that forbids us to use require inside .map() :(
    if (typeof window !== 'undefined') {
      const urlList = [];
      for (let i = 0; i < photos.length; i++) {
        urlList.push(require(`../../${photos[i]}`)); // eslint-disable-line
      }
      return urlList;
    }
    return [];
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

        <OfferImages
          images={this.images}
          {...this.props}
        />

        <OfferOptions
          offer={offer}
          originLocations={this.originLocations}
          availableDailies={this.availableDailies}
          handleOriginSelect={this.handleOriginSelect}
          handleDailySelect={this.handleDailySelect}
          visibleOptions={this.getVisibleOptions(this.props.offer)}
          {...this.props}
        />
      </div>
    );
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
  visibility: PropTypes.object.isRequired,
};

OfferDetailsPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(OfferDetailsPage);
