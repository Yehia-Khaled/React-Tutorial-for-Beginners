import React, { Component } from "react";
import Counter from "./counterComponents";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };

  handleDelete=(counterId)=>{
    // console.log("Event handler called",counterId)
    const counters=this.state.counters.filter((c)=>(c.id !== counterId))
    this.setState({counters}) //as key value is the same at counters: counters we simplify to counters
  }
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id}  onDelete={this.handleDelete} counter={counter}/>
        /*<h4> Counter #{counter.id} </h4>
          </Counter>*/
        ))}
      </div>
    );
  }
}

export default Counters;