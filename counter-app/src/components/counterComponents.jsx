// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.value,
    // imageUrl: "https://picsum.photos/200",
    // tags: ["tag1",'tag2','tag3','tag'],
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
    this.handleIncrement=this.handleIncrement.bind(this) //this bind method will return a new instance of the handleIncrement function ,
    //and this in that function will reference to current counter object


}*/
  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags! </p>;

    return this.state.tags.map((tag) => <li key={tag}> tag</li>);
  }
*/
  handleIncrement = () => {
    //16- Binding Event Handlers
    //arrow function don't rebind to this key word ,they inherited
    //using an arrow function is cleaner and simpler adding a custom constructor and rebinding every event handler manually
    // console.log("Increment Clicked",this)
    //obj.method();
    //function();

    //17- Updating the State
    // console.log(product)
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log('props',this.props) //test props
    return (
      <div>
        {/*{this.props.children}*/}
        {/*<img src={this.state.imageUrl} alt="" />*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*we didn't call this.handleIncrement() we paa a reference to it this.handleIncrement*/}
        <button
          onClick={this.handleIncrement} //()=>this.handleIncrement({id:1})
          className="btn btn-secondary btn-sm"
        >
          Increment{" "}
        </button>

        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>*/}
      </div>
    );
  }

  // 12- Rendering Classes Dynamically
  getBadgeClasses() {
    let classes = "badge  m-3 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
