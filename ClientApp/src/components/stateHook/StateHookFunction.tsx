import * as React from "react";

import "./StateHook.css";


export const StateHookFunction: React.FC = () => {
    const cookiesConsumed = 0;
    const addCookie = undefined;
    /*
    // 1. Add UseState to keep track of cookiesConsumed

    // Initial value: Hardcoded value
    // const [cookiesConsumed, setCookiesConsumed] = React.useState<number>(0);

    // Initial value: function
    //const [cookiesConsumed, setCookiesConsumed] = React.useState<number>(() => (Math.floor(Math.random() * 100)));
    
    */

    /*
    // 2. Add function that can update the state
    const addCookie = (): void => {
        setCookiesConsumed(cookiesConsumed + 1);
        //setCookiesConsumed((prevAmount) => prevAmount + 1);

        //Example with two setStates without prevCount
        //setCookiesConsumed(cookiesConsumed + 1);
        //setCookiesConsumed(cookiesConsumed + 1); 
    
        //Example with two setStates with prevCount
        //setCookiesConsumed((prevAmount) => prevAmount + 1);
        //setCookiesConsumed((prevAmount) => prevAmount + 1);

    }
    */

    return (
        <div className="stateHook">
            <h1>Functional Component</h1>
            <span className="bear">🐻</span>
            {cookiesConsumed < 1 &&
                <span className="tear">💧</span>
            }

            <p>Cookies eaten 🍪: <b>{cookiesConsumed}</b></p>
            <button onClick={addCookie}>Give cookie</button>
        </div>
    );
}