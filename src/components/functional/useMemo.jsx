import React, { useMemo } from 'react';

export default (props) => {
  const [state, setState] = React.useState({
    a: 0,
    b: 0,
  });

  const [counter, setCounter] = React.useState(0);

  const sumValue = useMemo(() => {
    console.log('useMemo is called');
    // whenver value of state change then
    // new sum value will return
    return state.a + state.b;
  }, [state]);

  const setSum = (a, b) => {
    setState({
      ...state,
      a,
      b,
    });
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <br />
      <button onClick={() => setSum(10, 20)}>Set Sum</button>
      <br />
      <div>Sum Value is {sumValue}</div>
    </div>
  );
};
