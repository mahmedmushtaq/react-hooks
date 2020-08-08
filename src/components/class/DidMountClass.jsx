import React from 'react';

export default class DidMountClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProp,prevState){
        console.log("prev state is = ",prevState);
  }

  componentDidMount(){
      console.log("did mount ");
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