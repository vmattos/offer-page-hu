import test from 'ava';
import OptionDailies from '../../components/OptionDailies/OptionDailies';

test('mountDescription should return a formatted message', t => {
  const component = new OptionDailies();
  const descriptionSingular = component.mountDescription(1);
  const descriptionPlural = component.mountDescription(2);

  t.is(descriptionSingular.props.id, 'option.dailies.singleDay');
  t.is(descriptionPlural.props.id, 'option.dailies.dailies');
});
