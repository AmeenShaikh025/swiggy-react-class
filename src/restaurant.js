import React, { Component } from "react";
import Card from "./components/Card";
import QtyButton from "./components/QtyButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          name: "Biriyani Cafe",
          cuisine: "Indian ,Mughal",
          startTime: "11:00am",
          timeToDeliver: "45mins",
          RsForTwo: "Rs450",
          offers: "20%",
          quantity: 2,
          user: "sadiq"
        },
        {
          name: "Night Biriyani",
          cuisine: "Chienesse ,Mughal",
          startTime: "4:00pm",
          timeToDeliver: "45mins",
          RsForTwo: "Rs950",
          quantity: 0,
          offers: "40%"
        },
        {
          name: "MY Cafe",
          cuisine: "Indian ,Mughal",
          startTime: "11:00am",
          timeToDeliver: "45mins",
          RsForTwo: "Rs450",
          quantity: 0,
          offers: "20%"
        }
      ],
      cart: [
        {
          name: "Biriyani Cafe",
          quantity: 0
        }
      ]
    };
  }

  addToCart = name => {
    const itemLocation = this.state.cart.findIndex(item => item.name === name);
    if (itemLocation === -1) {
      let newCart = [...this.state.cart];
      newCart.push({ name: name, quantity: 1 });

      this.setState({ cart: newCart });
      // this.setState({ cart: [ ...this.state.cart, { name: name, quantity: 1} ] })
    } else {
      let newCart = [...this.state.cart];
      newCart[itemLocation].quantity =
        this.state.cart[itemLocation].quantity + 1;
      // newCart[itemLocation].quantity++

      this.setState({ cart: newCart });
    }
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        {this.state.restaurants.map(r => (
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignContent: "space-around"
              // alignContent: 'center',
              // justifyContent: "center"
            }}
          >
            <Card
              name={r.name}
              cuisine={r.cuisine}
              startTime={r.startTime}
              timeToDeliver={r.timeToDeliver}
              RsForTwo={r.RsForTwo}
              offers={r.offers}
              user={r.user}
            />
            <QtyButton
              name={r.name}
              quantity={
                cart.find(item => item.name === r.name)
                  ? cart.find(item => item.name === r.name).quantity
                  : 0
              }
              clickHandler={this.addToCart}
            />
          </div>
        ))}
      </div>
    );
  }
}

// export default App

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
