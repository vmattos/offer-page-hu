import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_OFFERS = 'ADD_OFFERS';

// Export Actions
export function addOffers(offers) {
  return {
    type: ADD_OFFERS,
    offers,
  };
}

export function fetchOffers() {
  return (dispatch) => {
    return callApi('offers').then(res => {
      dispatch(addOffers(res));
    });
  };
}
