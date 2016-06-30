/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import offers from './modules/Offer/OfferReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  offers,
});
