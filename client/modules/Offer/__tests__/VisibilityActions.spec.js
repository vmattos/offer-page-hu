import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  SET_ORIGIN_FILTER,
  setOriginFilter,
} from '../VisibilityActions';

test('should return the correct type for setOriginFilter', actionTest(
  setOriginFilter,
  'Rio de Janeiro',
  { type: SET_ORIGIN_FILTER, filter: 'Rio de Janeiro' }
));
