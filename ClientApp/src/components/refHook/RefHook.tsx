import * as React from "react";

export const RefHook: React.FC = () => {
    const [myName, setMyName] = React.useState<string>("");

    // Infinite loop
    const [renderCount, setRenderCount] = React.useState<number>(0);
    React.useEffect(() => {
        // Infinite loop because state changing is triggering rerender
        setRenderCount((prevCount) => prevCount + 1);
    })

    return (
        <div style={{ fontSize: "2em" }}>
            <div>Hello! My name is: {myName}</div>
            <input value={myName} onChange={e => setMyName(e.target.value)} />
            <button onClick={() => setMyName("🐻")}>Click me!</button>
            <div>This page has been rendered {renderCount} times since initial mount.</div>
        </div>
    );



    /*
    // Don't re-render complete if value changes 
    const renderCount = React.useRef<number>(0);
    React.useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <div style={{ fontSize: "2em" }}>
            <div>Hello! My name is: {myName}</div>
            <input value={myName} onChange={e => setMyName(e.target.value)} />
            <button onClick={() => (renderCount.current = renderCount.current + 1)}>Click me to update RenderCount</button>
            <div>This page has been rendered {renderCount.current} times since initial mount.</div>
        </div>
    );

    */

    /* // Reference to an object as accessing DOM elements
    const inputRef = React.useRef<any>();

    const focusOnElement = () => {
        inputRef.current.focus();
    }
    return (
        <div style={{ fontSize: "2em" }}>
            <input ref={inputRef} value={myName} onChange={e => setMyName(e.target.value)} />
            <button onClick={focusOnElement}>Put focus on textBox</button>
        </div>
    );
    */
};