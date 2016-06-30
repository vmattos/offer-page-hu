import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import OfferList from '../../components/OfferList';

const offers = [
  { id: 0, title: 'salty vegas nights' },
  { id: 1, title: 'sad california nights' },
];

test('renders the list', t => {
  const wrapper = shallow(
    <OfferList offers={offers} />
  );

  t.is(wrapper.find('OfferListItem').length, 2);
});
