// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 2,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1",'tag2','tag3','tag'],
  };

  // styles = {
  //   fontSize: 15,
  //   fontWeight: "bold",
  // };
/*  constructor(){
    super(); //because we add constructor in this child class "class Counter extends React.Component " ,first we have to
    //call the constructor of the parent class using the super keyword
  //this is method is called when this object "class Counter extends React.Component " is created
  //   console.log("constructor",this)

}*/
/*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags! </p>;

    return this.state.tags.map((tag) => <li key={tag}> tag</li>);
  }
*/
  handleIncrement(){
    console.log("Increment Clicked")
  }

  render() {
    return (
      <React.Fragment>
                 {/*<img src={this.state.imageUrl} alt="" />*/}
         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*we didn't call this.handleIncrement() we paa a reference to it this.handleIncrement*/}
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment </button>

       {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>*/}
      </React.Fragment>
    );
  }

     // 12- Rendering Classes Dynamically
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
