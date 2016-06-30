import test from 'ava';
import { actionTest } from 'redux-ava';

import { ADD_OFFERS, addOffers } from '../OfferActions';

const offer = {
  id: 0,
  title: 'sad nights',
};

test('should return the correct type for addOffers', actionTest(
  addOffers,
  [offer],
  { type: ADD_OFFERS, offers: [offer] },
));
