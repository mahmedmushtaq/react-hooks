import React, { useRef } from 'react';

export default (props) => {
  const inputValue = useRef(null);

  const submitValue = (e) => {
    // inputValue.current returns <input type="text"/>
    // you can check this
    console.log(inputValue.current);
    //  inputValue.current.value returns input field value
    console.log('input value is = ', inputValue.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputValue} />
      <button onClick={submitValue}>Submit</button>
    </div>
  );
};
