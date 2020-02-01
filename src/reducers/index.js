import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// import order from "./orderReducer";
import restaurant from "./restaurantReducer";

export default combineReducers({
  restaurant: restaurant,
  cart: cartReducer
  // order: order
});
