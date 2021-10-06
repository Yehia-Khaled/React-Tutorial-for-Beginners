import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  // styles = {
  //   fontSize: 15,
  //   fontWeight: "bold",
  // };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <br></br>
        {/* style={{ fontSize: 20 }}  */}
        <span className="badge badge-primary m-3">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
