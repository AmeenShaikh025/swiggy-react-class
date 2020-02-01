import React, { PureComponent } from "react";

class Card extends PureComponent {
  render() {
    // console.log("card", this.props);
    const {
      name,
      cuisine,
      rating,
      timeToDeliver,
      RsForTwo,
      offers
    } = this.props;

    return (
      <div
        style={{
          textAlign: "left",
          display: "inline-block"
        }}
      >
        <div style={{ padding: 10 }}>
          <p style={{ marginTop: 10 }}> {name}</p>
          <p style={{ marginTop: -5, fontSize: 14 }}>{cuisine}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13
            }}
          >
            <span> {rating}</span>
            <span>{timeToDeliver}</span>
            <span>{RsForTwo}</span>
          </div>

          <div style={{ marginTop: 10 }}>{offers}</div>
        </div>
      </div>
    );
  }
}

export default Card;
