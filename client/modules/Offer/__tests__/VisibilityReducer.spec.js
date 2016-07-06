import test from 'ava';
import { reducerTest } from 'redux-ava';
import visibilityReducer, { VisibilityReducer } from '../VisibilityReducer';
import { setOriginFilter } from '../VisibilityActions';

test('action for SET_ORIGIN_FILTER is working', reducerTest(
  visibilityReducer,
  {
    origin: '',
    daily: '',
  },
  setOriginFilter('Rio de Janeiro'),
  {
    origin: 'Rio de Janeiro',
    daily: ''
  },
));
