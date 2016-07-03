import { SET_ORIGIN_FILTER } from './VisibilityActions'

const initialState = {
  origin: "",
};

const VisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIGIN_FILTER:
      return {
        origin: action.filter,
      }

    default:
      return state;
  }
}

export const getVisibility = state => state.visibility;

export default VisibilityReducer;
