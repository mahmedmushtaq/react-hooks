import React from "react";
import ComponentA from "./ComponentA";


// context creation
export const UserValue = React.createContext();

export default props=>{

  

    return(
        <div>
            <h2>Use Context Tutorial</h2>
            <UserValue.Provider value={'M Ahmed'}>
                <ComponentA/>
            </UserValue.Provider>
        </div>
    )
}