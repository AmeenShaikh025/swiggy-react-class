import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Restaurantdetails extends Component {
  state = {
    items: {},
    name: ""
  };

  //   componentDidMount() {
  //     fetch(
  //       `http://food-power.glitch.me/restaurant/${this.props.match.params.rid}`
  //     )
  //       .then(data => data.json())
  //       .then(data => this.setState({ menu: data }));
  //   }

  componentDidMount() {
    let self = this;
    axios
      .get(
        `http://food-power.glitch.me/restaurant/${this.props.match.params.rid}`
      )
      .then(function(response) {
        self.setState({
          items: response.data.data.menu.items,
          name: response.data.data.name
        });
        //console.log(self.state);
        //console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const itemArray = Object.entries(this.state.items);

    console.log(Object.entries(this.state.items));

    const singleItem = itemArray.map(([key, val]) => {
      //console.log(val);
      return (
        <div key={val.id}>
          <p>{val.name}</p>
          <p>Rs:{val.price.toString().slice(0, -2)}</p>
        </div>
      );
    });

    return (
      <div>
        <h2>Restaurantdetails</h2>
        <p>Restaurant Name: {this.state.name}</p>
        {singleItem}
      </div>
    );
  }
}

export default withRouter(Restaurantdetails);
