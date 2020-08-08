import React from 'react';

export default (props) => {
  const { value, setValue } = props;
  const onChangeValue = (e) => {
    // you can also validate value here
    setValue(e.target.value);
  };
  return (
    <input
      type="text"
      value={value}
      onChange={onChangeValue}
      placeholder={props.placeholder}
    />
  );
};
