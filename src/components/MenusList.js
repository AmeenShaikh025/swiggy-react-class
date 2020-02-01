import React, { Component } from "react";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//redux

import AddButton from "./AddButton";
import MenuItem from "./MenuItem";

class MenusList extends Component {
  state = {
    menuItems: [
      { id: "me001", name: "Bhel puri", price: 100 },
      { id: "me002", name: "Dahi puri", price: 80 },
      { id: "me003", name: "Masala puri", price: 100 },
      { id: "me004", name: "Aaloo Chat", price: 50 },
      { id: "me005", name: "Vada paav", price: 90 }
    ]
  };

  // decrementHandler = name => {
  //   const { cart, menuItems } = this.state;
  // };
  // incrementHandler = name => {
  //   const { cart, menuItems } = this.state;
  // };

  render() {
    const { cart, restaurant } = this.props;
    if (!restaurant.menu) return <div>no data</div>;

    return (
      <div style={{ height: "100vh", maxWidth: 750, margin: "auto" }}>
        {/* {this.state.menuItems.map(r => ( */}
        {Object.entries(restaurant.menu.items).map(([itemId, r]) => (
          <div
            key={r.name}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 10px",
              borderBottom: "1px solid #ebecec",
              padding: "0px 15px",
              backgroundColor: "#fff"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#fff"
              }}
            >
              <MenuItem name={r.name} price={r.price} styleProps={{}} />
              <AddButton
                name={r.name}
                quantity={cart[r.name] ? cart[r.name] : 0}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

//for redux setup
const mapStateToProps = ({ restaurant, cart }) => {
  // console.log("store updated!. MSTP in App gets new data", store.cart);
  return {
    cart,
    restaurant
  };
};

export default connect(
  mapStateToProps,
  null
)(MenusList);
