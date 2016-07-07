import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_OFFERS,
  ADD_OFFER,
  addOffers,
  addOffer,
} from '../OfferActions';

const offer = {
  id: 0,
  title: 'sad nights',
};

test('should return the correct type for addOffers', actionTest(
  addOffers,
  [offer],
  { type: ADD_OFFERS, offers: [offer] },
));

test('should return the correct type for addOffer', actionTest(
  addOffer,
  offer,
  { type: ADD_OFFER, offer },
));

