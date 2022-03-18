import React, { createContext, useState } from "react";
// import { HomeP } from "./lesson9/pages";
import  Lesson10  from './lesson10'
import Example from "./lesson10/comps/Chart";

// export const Context = createContext();
function App() {
//   const [value, setValue] = useState(0);
//   const state = { value, setValue ,interval: 2};
  return (
    // <Context.Provider value={state}>
    //   <HomeP />
    // </Context.Provider>
    <Lesson10 />
    // <Example />
  );
}

export default App;
