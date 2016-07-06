import test from 'ava';
import { reducerTest } from 'redux-ava';
import visibilityReducer, { VisibilityReducer } from '../VisibilityReducer';
import { setOriginFilter, setDailyFilter } from '../VisibilityActions';

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

test('action for SET_DAILY_FILTER is working', reducerTest(
  visibilityReducer,
  {
    origin: '',
    daily: '',
  },
  setDailyFilter('5'),
  {
    origin: '',
    daily: '5'
  },
));

