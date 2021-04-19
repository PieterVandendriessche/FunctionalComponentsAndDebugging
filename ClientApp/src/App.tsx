import * as React from "react";

import "./App.css";
import { EffectHookClass } from "./components/effectHook/EffectHookClass";
import { EffectHookFunction } from "./components/effectHook/EffectHookFunction";
import { RefHook } from "./components/refHook/RefHook";
import { StateHookClass } from "./components/stateHook/StateHookClass";
import { StateHookFunction } from "./components/stateHook/StateHookFunction";

const App: React.FC = () => {
  return (
    <>
      {/*<StateHookClass />*/}
      { /*<StateHookFunction /> */}
      {/*<EffectHookClass />*/}
      {/*<EffectHookFunction />*/}
      {<RefHook />}
    </>
  )
};


export default App;