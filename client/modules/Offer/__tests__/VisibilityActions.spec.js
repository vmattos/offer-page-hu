import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  SET_ORIGIN_FILTER,
  SET_DAILY_FILTER,
  setOriginFilter,
  setDailyFilter,
} from '../VisibilityActions';

test('should return the correct type for setOriginFilter', actionTest(
  setOriginFilter,
  'Rio de Janeiro',
  { type: SET_ORIGIN_FILTER, filter: 'Rio de Janeiro' }
));

test('should return the correct type for setDailyFilter', actionTest(
  setDailyFilter,
  '5',
  { type: SET_DAILY_FILTER, filter: '5' }
));

