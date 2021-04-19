import * as React from "react";
import { useError } from "./useError";

export const CustomHook: React.FC = () => {
    const [errorMessage, setError] = useError();

    return (
        <div>
            {!!errorMessage && (
                <div style={{ backgroundColor: "red", color: "white" }}>
                    {errorMessage}
                </div>
            )}
            <button style={{ margin: "20px", fontSize: "5em" }} onClick={() => setError("Error button has been clicked!")}>🚨</button>
        </div>
    );
}