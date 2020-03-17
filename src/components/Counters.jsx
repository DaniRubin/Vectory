import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, selected: "True" },
      { id: 2, value: 5, selected: "True" },
      { id: 3, value: 0, selected: "True" },
      { id: 4, value: 0, selected: "True" }
    ]
  };
  handleDelete = idnumber => {
    const newCounters = this.state.counters.filter(c => c.id !== idnumber);
    this.setState({ counters: newCounters });
  };
  handleReset = () => {
    const newCounters = [
      { id: 1, value: 0, selected: "True" },
      { id: 2, value: 5, selected: "True" },
      { id: 3, value: 0, selected: "True" },
      { id: 4, value: 0, selected: "True" }
    ];
    this.setState({ counters: newCounters });
  };
  handleIncrease = counterData => {
    const newCounters = [...this.state.counters];
    const index = this.state.counters.indexOf(counterData);
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };
  handleDeacrese = counterData => {
    const newCounters = [...this.state.counters];
    const index = this.state.counters.indexOf(counterData);
    newCounters[index].value =
      newCounters[index].value === 0 ? 0 : newCounters[index].value - 1;
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-sm m-3 btn-primary"
        >
          Reset
        </button>
        {this.state.counters.map(cont => (
          <Counter
            key={cont.id}
            onDelete={this.handleDelete}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDeacrese}
            counter={cont}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
