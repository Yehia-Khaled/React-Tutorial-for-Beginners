// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
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
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {/* 13- Rendering Lists */}
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> tag</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  //12- Rendering Classes Dynamically
  getBadgeClasses() {
    let classes = "badge  m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
