import * as React from "react";

import "./App.css";
import { StateHookClass } from "./components/stateHook/StateHookClass";
import { StateHookFunction } from "./components/stateHook/StateHookFunction";

const App: React.FC = () => {
  return (
    <>
      {<StateHookClass />}
      { /*<StateHookFunction /> */}
    </>
  )
};


export default App;