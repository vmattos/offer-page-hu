import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import OfferOptions from '../../components/OfferOptions/OfferOptions';
import OptionsHeader from '../../components/OptionsHeader/OptionsHeader';
import OptionsBody from '../../components/OptionsBody/OptionsBody';

const offer = {
  id: 1,
};

const originLocations = [
  'Rio de Janeiro',
  'São Paulo',
];

test('should render properly', t => {
  const wrapper = shallow(
    <OfferOptions offer={offer} originLocations={originLocations} />
  );

  t.is(wrapper.find(OptionsHeader).length, 1);
  t.is(wrapper.find(OptionsBody).length, 1);
});
