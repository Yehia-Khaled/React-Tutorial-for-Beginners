import React, { Component } from "react";
import Counter from "./counterComponents";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset{" "}
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
          /*<h4> Counter #{counter.id} </h4>
          </Counter>*/
        ))}
      </div>
    );
  }
}

export default Counters;
