import { ADD_OFFERS } from './OfferActions';

// Initial State
const initialState = [];

const OfferReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_OFFERS :
      return action.offers;

    default:
      return state;
  }
};

/* Selectors */

// Get all offers
export const getOffers = state => state.offers;

// Export Reducer
export default OfferReducer;
