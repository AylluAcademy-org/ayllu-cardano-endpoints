function validateEnvValues ( inputValue: string, isStrict: boolean ): string {
    let toOutput = inputValue !== undefined ? inputValue : "";
    if (toOutput === "" && isStrict === true) {
        throw TypeError("The requested value is not available as an environment variable.");
    } else {
        return toOutput;
    }
}

export function getEnvVars( inputKey: string | string[], strict?: boolean ): string[] {
    require("dotenv").config();

    let output: string[] = new Array();
    const strictness: boolean = Boolean(strict);

    try {
        if (typeof inputKey === "string") {
            const tempValue = process.env[inputKey] as string;
            const toAppend = validateEnvValues(tempValue, strictness);
            output.push(toAppend);
        }
        else {
            for (let k of inputKey) {
                const tempValue = process.env[k] as string;
                const toAppend = validateEnvValues(tempValue, strictness);
                output.push(toAppend);
            }
        }
    } catch (e) {
        console.error(e);
    }
    
    return output;
}