import { SET_ORIGIN_FILTER, SET_DAILY_FILTER } from './VisibilityActions';

const initialState = {
  origin: '',
  daily: '',
};

const VisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIGIN_FILTER:
      return {
        ...state,
        origin: action.filter,
      };

    case SET_DAILY_FILTER:
      return {
        ...state,
        daily: action.filter,
      };

    default:
      return state;
  }
};

export const getVisibility = state => state.visibility;

export default VisibilityReducer;
