import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getClassesCounter()}>
          {this.formatCounterString()}
        </span>
        <button
          onClick={() => this.props.onIncrease(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increase
        </button>
        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleDecrease = () => {
    this.setState({
      count: (this.state.count =
        this.state.count === 0 ? 0 : this.state.count - 1)
    });
  };
  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  getClassesCounter() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCounterString() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
