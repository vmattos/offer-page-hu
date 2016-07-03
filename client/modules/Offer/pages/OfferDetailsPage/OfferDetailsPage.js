import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import OfferTitle from '../../components/OfferTitle/OfferTitle'
import OfferOptions from '../../components/OfferOptions/OfferOptions'

import styles from './OfferDetailsPage.css';

// Import Actions
import { fetchOffer } from '../../OfferActions';
import { setVisibilityFilter } from '../../VisibilityActions';

// Import Selectors
import { getOffer } from '../../OfferReducer';
import { getVisibility } from '../../VisibilityReducer';

class OfferDetailsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.originLocations = this.getOriginLocations();
  }

  componentDidMount() {
    this.props.dispatch(fetchOffer(this.props.offer.id))
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
          originLocations={this.originLocations.length}
          offer={offer}
          {...this.props}
        />

        <OfferOptions
          offer={offer}
          originLocations={this.originLocations}
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
};

OfferDetailsPage.contextTypes = {
  router: React.PropTypes.object,
}

export default connect(mapStateToProps)(OfferDetailsPage);
