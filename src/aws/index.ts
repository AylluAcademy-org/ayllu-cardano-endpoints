import { fromEnv } from "@aws-sdk/credential-providers";

export function getAwsCredentials() {
    require("dotenv").config();

    if (process.env['AWS_ACCESS_KEY_ID'] !== undefined 
        && process.env['AWS_SECRET_ACCESS_KEY'] !== undefined) {
            return fromEnv();
    } else {
        throw Error('Please provide the value for AWS Credentials inside your `.env` file.')
    }
};


export * from "./iot";
export * from "./lambda";