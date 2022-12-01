import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
}

incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
}

  render() {
    const { count} = this.state;
    return (
      <div>
        <p>Count: { count } </p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default Counter;
