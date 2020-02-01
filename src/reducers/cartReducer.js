//2.action types
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

//3.action creators
export const incrementHandler = name => {
  return {
    type: INCREMENT_ITEM,
    payload: { name }
  };
};

export const decrementHandler = name => ({
  type: DECREMENT_ITEM,
  payload: { name }
});

// 4,reducers
const defaultState = {};

export default function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_ITEM: {
      const name = action.payload.name;
      const newState = {
        ...state,
        [name]: (state[name] || 0) + 1
      };
      return newState;
    }
    case DECREMENT_ITEM: {
      const name = action.payload.name;
      const newState = {
        ...state,
        [name]: (state[name] || 0) - 1
      };
      return newState;
    }
    default:
      return state;
  }
}
