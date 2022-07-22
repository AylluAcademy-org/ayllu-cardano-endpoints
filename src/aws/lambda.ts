import { LambdaClient } from "@aws-sdk/client-lambda";
import { getEnvVars } from "../utils";
import { getAwsCredentials } from "./index";

export function getLambdaClient() {
    try{
        const lambdaEndpoint: string = getEnvVars('AWS_LAMBDA_ENDPOINT')[0];
        const lambdaRegion: string = getEnvVars('AWS_REGION')[0];
        return new LambdaClient({ credentials: getAwsCredentials(), 
            region: lambdaRegion,
            endpoint: lambdaEndpoint });
        } catch (e) {
            console.error(e);
        }
}

export async function sendRequest( clientHandler: LambdaClient, payload: any ) {
    try {
        return await clientHandler.send(payload);
    } catch(e) {
        console.error(e);
    }
}