import React, { Component } from "react";
import { connect } from "react-redux";

class TopBar extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="header">
        <div> Lets Snack </div>
        <div> {Object.keys(cart).length} Cart </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(TopBar);
