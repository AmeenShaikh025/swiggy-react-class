import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { addItem, removeItem } from "../actions/cartActions";
import { incrementHandler, decrementHandler } from "../reducers/cartReducer";

const buttonStyle = {
  border: "1px solid orange",
  color: "#fc8019",
  height: 30,
  width: 90,
  cursor: "pointer",
  alignSelf: "center",
  // marginTop: "auto",
  // marginBottom: "auto",
  backgroundColor: "#fff"
};
const btn = {
  alignItems: "stretch",
  border: 0,
  flex: 1,
  padding: "0px 8px",
  cursor: "pointer"
};
class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  render() {
    const { cart, incrementHandler, decrementHandler, name } = this.props;
    return (
      <div style={buttonStyle}>
        {cart[name] ? (
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              height: "100%"
            }}
          >
            <button style={btn} onClick={() => decrementHandler(name)}>
              -
            </button>
            <div style={{ flex: 1, alignSelf: "center" }}> {cart[name]} </div>
            <button style={btn} onClick={() => incrementHandler(name)}>
              +
            </button>
          </div>
        ) : (
          <div
            style={{ height: "30px", lineHeight: "30px" }}
            onClick={() => incrementHandler(name)}
          >
            Add
          </div>
        )}
      </div>
    );
  }
}

// export default AddButton;

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementHandler,
      decrementHandler
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
