import React, { PureComponent } from "react";

class MenuItem extends PureComponent {
  render() {
    const { name, price } = this.props;

    return (
      <div style={{ padding: 8 }}>
        <div style={{ textAlign: "left" }}>
          {name} <br />
          <div style={{ paddingTop: 8, fontSize: 16 }}>
            <span
              style={{
                color: "gray"
              }}
            >
              ₹ {price}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
