import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import offers from './modules/Offer/OfferReducer';
import visibility from './modules/Offer/VisibilityReducer';

export default combineReducers({
  app,
  intl,
  offers,
  visibility,
});
