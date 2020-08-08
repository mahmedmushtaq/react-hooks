import React from 'react';

export default (props) => {
  const { value } = props;
  return (
    <div>
      <h6>Component B</h6>

      <p>Props value - {value}</p>
    </div>
  );
};
