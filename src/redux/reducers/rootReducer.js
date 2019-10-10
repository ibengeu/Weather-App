import { SUBMIT_LOCATION } from "../ActionTypes";

const initialState = {
  currentWeather: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === SUBMIT_LOCATION) {
    return Object.assign({}, ...state, {
      currentWeather: state.data.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;