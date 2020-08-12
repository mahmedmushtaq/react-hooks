import React, { useCallback, useState } from 'react';

export default (props) => {
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0);

  // set Name value
  const setNameValue = (arg) => {
    setName(arg);
  };

  //   //simple example
  const nameValue = useCallback(() => {
    // whenever name value will change then this function will call
    // if counter value will change
    // then this function will not call
    return name;
  }, [name]);

  return (
    <div>
      <div>{counter}</div>

      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <br />
      <button onClick={() => setNameValue('M Ahmed Mushtaq')}>
        Set Name By UseCallBack
      </button>
      <br />
      {
        nameValue() // get value from memorized function
      }
    </div>
  );
};
