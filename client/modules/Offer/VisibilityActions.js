export const SET_ORIGIN_FILTER = 'SET_ORIGIN_FILTER';
export const SET_DAILY_FILTER = 'SET_DAILY_FILTER';

export function setOriginFilter(filter) {
  return {
    type: SET_ORIGIN_FILTER,
    filter,
  };
}

export function setDailyFilter(filter) {
  return {
    type: SET_DAILY_FILTER,
    filter,
  };
}
