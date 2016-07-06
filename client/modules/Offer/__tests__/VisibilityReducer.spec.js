import test from 'ava';
import { reducerTest } from 'redux-ava';
import visibilityReducer, { getVisibility } from '../VisibilityReducer';
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
    daily: '',
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
    daily: '5',
  },
));

test('getVisibility selector', t => {
  t.deepEqual(
    getVisibility({
      visibility: {
        origin: 'Rio de Janeiro',
        daily: '5',
      },
    }),
    {
      origin: 'Rio de Janeiro',
      daily: '5',
    }
  );
});
