import React, { Component } from "react";
import Counter from "./counterComponents";

class Counters extends React.Component {
  render() {
      const {onReset,counters,onIncrement,onDelete}=this.props
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset{" "}
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
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
