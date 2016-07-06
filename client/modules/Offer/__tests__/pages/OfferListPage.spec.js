import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { configureStore } from '../../../../store';
import OfferListPage from '../../pages/OfferListPage/OfferListPage';

const store = configureStore();

test('has correct props', t => {
  const wrapper = shallow(<OfferListPage store={store} />);
  t.truthy(wrapper.props().offers);
});
