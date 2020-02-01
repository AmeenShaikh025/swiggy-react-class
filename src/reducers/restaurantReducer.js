import {
  RESTAURANT_DATA_SUCCESS,
  RESTAURANT_DATA_FAILURE
} from "../actions/restaurantActions";

// 4,reducers
const defaultState = {};

export default function restaurantReducer(state = defaultState, action) {
  switch (action.type) {
    case RESTAURANT_DATA_SUCCESS: {
      console.log("RESTAURANT_DATA_SUCCESS", action.payload);
      const newState = { ...action.payload };
      return newState;
    }
    case RESTAURANT_DATA_FAILURE: {
      console.log("RESTAURANT_DATA_FAILURE", action.payload);
      const newState = { ...action.payload };
      return newState;
    }
    default:
      return state;
  }
}
