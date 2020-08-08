import React, { useContext } from 'react';
import ComponentB from './ComponentB';
import { UserValue } from './Context';

export default (props) => {
  const userValue = useContext(UserValue);
  return (
    <div>
      <ComponentB value={userValue} />
    </div>
  );
};

// example without using useContext

// export default (props) => {
//   return (
//     <div>
//       <h6>Component A</h6>
//       <UserValue.Consumer>
//         {
//           //    here you can access context value
//           (value) => (
//             // you can pass this value to the child or you can only print this
//             <ComponentB value={value} />
//           )
//         }
//       </UserValue.Consumer>
//     </div>
//   );
// };
