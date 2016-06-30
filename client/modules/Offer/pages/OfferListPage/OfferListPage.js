import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import OfferList from '../../components/OfferList';

// Import Actions
import { fetchOffers } from '../../OfferActions';

// Import Selectors
import { getOffers } from '../../OfferReducer';

class OfferListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOffers());
  }

  render() {
    return (
      <div>
        <OfferList offers={this.props.offers} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
OfferListPage.need = [() => { return fetchOffers(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    offers: getOffers(state),
  };
}

OfferListPage.propTypes = {
  offers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

OfferListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(OfferListPage);
