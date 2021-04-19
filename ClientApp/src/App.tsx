import * as React from "react";

import "./App.css";
import { CustomHook } from "./components/customHook/CustomHook";
import { DevtoolContainer } from "./components/devtools/DevtoolContainer";
import { EffectHookClass } from "./components/effectHook/EffectHookClass";
import { EffectHookFunction } from "./components/effectHook/EffectHookFunction";
import { RefHook } from "./components/refHook/RefHook";
import { StateHookClass } from "./components/stateHook/StateHookClass";
import { StateHookFunction } from "./components/stateHook/StateHookFunction";

const App: React.FC = () => {
  return (
    <>
      {/*<StateHookClass />8?}
      { /*<StateHookFunction /> */}
      {/*<EffectHookClass />*/}
      {/*<EffectHookFunction />*/}
      {/*<RefHook />*/}
      {/*<CustomHook />*/}

      {<DevtoolContainer />}
    </>
  )
};


export default App;