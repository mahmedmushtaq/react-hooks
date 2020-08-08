import React, { useEffect, useState } from 'react';

export default (props) => {
    // use all the state in a single object is preferable 
    //if your child components don't need separate state
    
  const [name, setName] = useState('');
  const [houseNO,setHouseNO] = useState('');
  const [state,setState] = useState({});
  const valueArray = [];

  useEffect(()=>{
      // it will behave as componentDidMount
      // you can call your api here
      console.log("behave as a component Did mount")
  },valueArray)

  useEffect(() => {
      // whenever name value will change then this function will call
    console.log('use Effect is called');
  },[name]);


  useEffect(() => {
    // whenever state or houseNO value will change then this function will call
  console.log('use Effect is called');
},[houseNO,state]);





  return (
    <div>
      <h2>Name value is {name}</h2>
      <button onClick={() => setName('M Ahmed Mushtaq')}>
        {' '}
        Set Name Value
      </button>
    </div>
  );
};
