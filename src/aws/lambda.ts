/* 
* This module won't be used right now. But it might come handy in the future. 
* For that reason it will be left in the folder. 
*/

import { InvokeCommandInput, Lambda } from "@aws-sdk/client-lambda";
import { fromUtf8 } from "@aws-sdk/util-utf8-node";
import { getEnvVars, getJsonVars } from "../utils";
import { getAwsCredentials } from "./index";

export function getLambdaClient( endpointName: string ) {
    try{
        const lambdaEndpoint: string = getJsonVars('endpoints/lambda.json')[endpointName];
        const lambdaRegion: string = getEnvVars('AWS_REGION')[0];
        return new Lambda({ 
            credentials: getAwsCredentials(), 
            region: lambdaRegion,
            endpoint: lambdaEndpoint    
        });
        } catch (e) {
            console.error(e);
        }
};

export async function sendRequest( clientHandler: Lambda) {
    try {
        const data = '{"queryStringParameters": {"user_id": 1}}'

        const params: InvokeCommandInput = {
            FunctionName: "ayllu-api-test-v2-dev-getUserById",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: fromUtf8(data)
        }
        console.log(params);
        const output = await clientHandler.invoke(params);
        console.log(output);
    } catch(e) {
        console.log('Function failed');
    }
};
