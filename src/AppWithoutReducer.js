import React, { Component } from "react";
import Card from "./components/Card";
import AddButton from "./components/AddButton";
import TopBar from "./components/TopBar";
import MenusList from "./components/MenusList";
// import { addItem } from './reducers/cartReducer'

//redux
import { connect } from "react-redux";
//redux

class App extends Component {
  state = {
    menuItems: [
      { id: "me001", name: "Bhel puri" },
      { id: "me002", name: "Dahi puri" },
      { id: "me003", name: "Masala puri" }
    ],
    cart: {}
  };

  decrementHandler = name => {
    const { cart, menuItems } = this.state;
  };
  incrementHandler = name => {
    const { cart, menuItems } = this.state;
  };

  render() {
    const { cart } = this.props;
    // console.log("cartprops", cart.length);
    return (
      <div className="App">
        <TopBar />
        <MenusList />
        {/* {this.state.menuItems.map(r => (
          <div
            key={r.name}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignContent: "space-around",
              margin: "10px",
              paddingBottom: "10px",
              backgroundColor: "#fff"
            }}
          >
            <Card name={r.name} />
            <AddButton
              name={r.name}
              quantity={cart[r.name] ? cart[r.name] : 0}
            />
          </div>
        ))} */}
      </div>
    );
  }
}
export default App;
