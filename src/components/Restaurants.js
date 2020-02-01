import React, { Component } from "react";
import { Link } from "react-router-dom";
class Restaurants extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    fetch("http://food-power.glitch.me/restaurants")
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ restaurants: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { restaurants } = this.state;

    const Restaurants = restaurants.map(restaurant => {
      return (
        <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
          <div className="restaurant">
            <p>{restaurant.name}</p>
            <p>Rating:{restaurant.avgRating}</p>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <h2>Restaurants</h2>
        <div className="restaurants">{Restaurants}</div>
      </div>
    );
  }
}

export default Restaurants;
