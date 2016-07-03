import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_OFFERS = 'ADD_OFFERS';
export const ADD_OFFER = 'ADD_OFFER'

// Export Actions
export function addOffers(offers) {
  return {
    type: ADD_OFFERS,
    offers,
  };
}

export function addOffer(offer) {
  return {
    type: ADD_OFFER,
    offer
  }
}

export function fetchOffers() {
  return (dispatch) => {
    return callApi('offers').then(res => {
      dispatch(addOffers(res));
    });
  };
}

export function fetchOffer(id) {
  const endpoint = `offers/${id}`
  return (dispatch) => {
    return callApi(endpoint).then(res => {
      dispatch(addOffer(res));
    });
  }
}

