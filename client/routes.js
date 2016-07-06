import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

import OfferListPage from './modules/Offer/pages/OfferListPage/OfferListPage';
import OfferDetailsPage from './modules/Offer/pages/OfferDetailsPage/OfferDetailsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute
      component={OfferListPage}
    />
    <Route
      path="/offers/:id"
      component={OfferDetailsPage}
    />
  </Route>
);
