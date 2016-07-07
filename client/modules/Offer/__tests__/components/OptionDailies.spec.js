import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import OptionDailies from '../../components/OptionDailies/OptionDailies';

const option = {};

test('mountDescription should return a formatted message', t => {
  const component = new OptionDailies();
  const descriptionSingular = component.mountDescription(1);
  const descriptionPlural = component.mountDescription(2);

  t.is(descriptionSingular.props.id, 'option.dailies.singleDay');
  t.is(descriptionPlural.props.id, 'option.dailies.dailies');
});
