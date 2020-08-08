import React, { useState } from 'react';

export default (props) => {
  // act as a state
  // first argument specify property name
// second argument set the value of property

  const [state, setState] = useState({
    count: 0,
  });

  const [name, setName] = useState(''); // default name value is empty string
  // you can also mention name property in above useState object

  const setNameValue = (value) => {
    setName(value); // update the name value
  };

  const incrementCount = () => {
    setState({
      ...state, // spread prev state
      count: state.count + 1, // change only count value
    });
  };

  return (
    <div>
      <div>
        <h2>Use State Tutorial</h2>
        <h6>Increment Value {state.count}</h6>
        <h6>Name Value {name}</h6>

        <button onClick={incrementCount}>Increment Value</button>
        <br />
        <button onClick={() => setNameValue('M Ahmed Mushtaq')}>
          Set Name Value
        </button>
      </div>
    </div>
  );
};
