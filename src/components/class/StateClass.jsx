import React from 'react';

export default class StateClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prev) => ({
      count: prev.count++,
    }));
  }

  render() {
    return (
      <div>
        <h2>This.state tutorial</h2>
        <h6>Increment Value {this.state.count}</h6>
        <button onClick={this.increment.bind(this)}>Increment Value</button>
      </div>
    );
  }
}
