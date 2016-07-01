import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import OfferTitle from '../../components/OfferTitle/OfferTitle'

import styles from './OfferDetailsPage.css';

// Import Actions
import { fetchOffer } from '../../OfferActions';

// Import Selectors
import { getOffer } from '../../OfferReducer';

class OfferDetailsPage extends Component {
  componentDidMount() {
    //this.props.dispatch(fetchOffer(this.props.offer.id))
  }

  getOriginLocations() {
    return this.props.offer.options
      .reduce((p, o) => [...p, ...o.from], [])
      .reduce((p, o) => p.indexOf(o) === -1 ? [...p, o] : p, [] );
  }

  render() {
    const offer = this.props.offer;
    return (
      <div className={styles.container}>
      <OfferTitle
        originLocations={this.getOriginLocations().length}
        offer={offer}
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
