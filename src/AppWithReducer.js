import React, { Component, createRef } from "react";
import TopBar from "./components/TopBar";
import MenusList from "./components/MenusList";
import Restaurants from "./components/Restaurants";
import Restaurantdetails from "./components/Restaurantdetails";

import { connect } from "react-redux";
import { getRestaurantByID } from "./actions/restaurantActions";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    // https://reactjs.org/docs/uncontrolled-components.html
    this.input = createRef();
  }
  getRestaurantData = () => {
    const restaurantID = this.input.current.value;
    this.props.getRestaurantByID(restaurantID || "25225");
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Link to="/restaurants">
              <button type="button">Show All Restaurants</button>
            </Link>
            <br />
          </Route>
          <Route path="/restaurants" exact>
            <Restaurants />
          </Route>
          <Route path="/restaurants/:rid" exact>
            {/* <input
              type="text"
              name="resID"
              ref={this.input}
              placeholder={"25225"}
            />
              <button type="button" onClick={this.getRestaurantData}>
                Get Restaurant Data
              </button>
            <br /> */}
            <Restaurantdetails />
            <TopBar />
            <MenusList />
          </Route>
        </Switch>
      </div>
    );
  }
}
// export default App;
const mapStateToProps = ({ restaurant }) => ({
  restaurant
});

const mapDispatchToProps = dispatch => {
  return {
    getRestaurantByID: restaurantID => dispatch(getRestaurantByID(restaurantID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
