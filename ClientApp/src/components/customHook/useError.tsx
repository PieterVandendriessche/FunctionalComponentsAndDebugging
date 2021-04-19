import * as React from "react";

export const useError = (): [string, (errorMessage: string) => void] => {
    const [error, setError] = React.useState<string>("");

    const verifyAndAddError = (errorMessage: string) => {
        if (!!errorMessage) {
            setError(errorMessage);
        }
    }

    return [error, verifyAndAddError];
}