import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from "./components/navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };

  constructor(props){ //constructor is called once it's a right place to initialize the property
    super(props);
    console.log('App- Constructor',this.props)
  }

  componentDidMount() {
    //this method is called after a components is rendered into the dom,
    // is perfect place to make Ajax calls to get date from the server
    //set new data from server
    // this.setState()
    console.log('App- Mounted')
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //... "spread operator"
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[index]);
    // console.log(counter)
  };

  handleDelete = (counterId) => {
    // console.log("Event handler called",counterId)
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); //as key value is the same at counters: counters we simplify to counters
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>

    );
  };
}
export default App;
