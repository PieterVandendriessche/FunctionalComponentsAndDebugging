import * as React from "react";

export interface IDevTool1Props {
    name: string;
}

export const Devtool1: React.FC<IDevTool1Props> = (props: IDevTool1Props) => {
    const [greeting, setGreeting] = React.useState<string>("hello ")
    return (
        <div>
            <p>{greeting} <b>{props.name}</b></p>
            <button onClick={() => setGreeting("New greeting")}>Add new greeting</button>
        </div>
    )
}