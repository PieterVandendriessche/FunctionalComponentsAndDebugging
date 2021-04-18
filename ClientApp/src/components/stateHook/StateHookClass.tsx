import * as React from "react";

import "./StateHook.css";

export interface IStateHookClass {
    cookiesConsumed: number;
}

export class StateHookClass extends React.Component<{}, IStateHookClass> {
    constructor(props: any) {
        super(props);

        this.state = {
            cookiesConsumed: 0
        };

        this.AddCookie = this.AddCookie.bind(this);
    }

    public AddCookie() {
        const currentAmount = this.state.cookiesConsumed;
        this.setState({
            cookiesConsumed: currentAmount + 1
        })
    }

    public render() {
        return (
            <div className="stateHook">
                <h1>Class Component</h1>
                <span className="bear">🐻</span>
                {this.state.cookiesConsumed < 1 &&
                    <span className="tear">💧</span>
                }

                <p>Cookies eaten 🍪: <b>{this.state.cookiesConsumed}</b></p>
                <button onClick={this.AddCookie}>Give cookie</button>
            </div>
        );
    }
}