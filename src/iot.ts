import { IoTDataPlaneClient, PublishCommand, PublishCommandInput } from "@aws-sdk/client-iot-data-plane";
import { fromEnv } from "@aws-sdk/credential-providers";
import { getEnvVars } from "./utils";

function getAwsCredentials() {
    require("dotenv").config();

    if (process.env['AWS_ACCESS_KEY_ID'] !== undefined 
        && process.env['AWS_SECRET_ACCESS_KEY'] !== undefined) {
            return fromEnv();
    } else {
        throw Error('Please provide the value for AWS Credentials inside your `.env` file.')
    }
}

export function getClient( onProvider?: boolean ) {
    const providerBool = onProvider !== undefined ? onProvider : true;

    try {
        const iotEndpoint: string = getEnvVars('AWS_ENDPOINT')[0];
        const iotRegion: string = getEnvVars('AWS_REGION')[0];
        if (providerBool) {
            return new IoTDataPlaneClient({ region: iotRegion, endpoint: iotEndpoint })
        } else {
            return new IoTDataPlaneClient({ credentials: getAwsCredentials() , region: iotRegion, endpoint: iotEndpoint });
        }
    } catch (e) {
        console.log(`It was not possible to create an IoT Client.\n${e}`)
    }
};

export function formatCommands(inputValue: Uint8Array) {
    const iotTopic: string = getEnvVars("AWS_TOPIC")[0];

    const params: PublishCommandInput = { payload: inputValue, qos: 1, retain: false, topic: iotTopic }

    return new PublishCommand(params);
}