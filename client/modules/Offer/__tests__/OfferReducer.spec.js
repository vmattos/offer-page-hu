import test from 'ava';
import { reducerTest } from 'redux-ava';
import offerReducer, { getOffers } from '../OfferReducer';
import { addOffers } from '../OfferActions';

test('action for ADD_OFFERS is working', reducerTest(
  offerReducer,
  [],
  addOffers([
    {
      id: 0,
      title: 'salty casino',
      location: 'california',
      description: 'north cal salt mines',
      photos: ['image.png'],
      options: [
        {
          id: 2,
          title: 'north cal sad nights',
          description: 'Double rooms require double salt',
          daily: 5,
          price: 2300,
          from: ['Brasilia'],
        },
      ],
    },
  ]),
  [
    {
      id: 0,
      title: 'salty casino',
      location: 'california',
      description: 'north cal salt mines',
      photos: ['image.png'],
      options: [
        {
          id: 2,
          title: 'north cal sad nights',
          description: 'Double rooms require double salt',
          daily: 5,
          price: 2300,
          from: ['Brasilia'],
        },
      ],
    },
  ],
));

test('getOffers selector', t => {
  t.deepEqual(
    getOffers({
      offers: [{ foo: 'bar' }],
    }),
    [{ foo: 'bar' }]
  );
});
