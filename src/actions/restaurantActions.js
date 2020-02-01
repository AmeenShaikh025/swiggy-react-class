import axios from "axios";
import { baseURL } from "../utils/constants";

// export const GET_RESTAURANT_BY_ID = "GET_RESTAURANT_BY_ID";
export const RESTAURANT_DATA_SUCCESS = "RESTAURANT_DATA_SUCCESS";
export const RESTAURANT_DATA_FAILURE = "RESTAURANT_DATA_FAILURE";

export const get_restaurant_data_success = restaurant => {
  console.log("get_restaurant_data_success", restaurant);
  return {
    type: RESTAURANT_DATA_SUCCESS,
    payload: restaurant
  };
};

export const get_restaurant_data_failure = err => {
  console.log("get_restaurant_data_failure", err);
  return {
    type: RESTAURANT_DATA_FAILURE,
    payload: err
  };
};

export const getRestaurantByID = restaurantID => dispatch => {
  const url = `${baseURL}/restaurant/${restaurantID}`;
  axios({
    method: "get",
    url,
    responseType: "json"
  })
    .then(function(resp) {
      const restaurant = resp.data.data;
      dispatch(get_restaurant_data_success(restaurant));
    })
    .catch(function(err) {
      console.log("err", err.toJSON());
      dispatch(get_restaurant_data_failure(err.toJSON()));
    });
};
