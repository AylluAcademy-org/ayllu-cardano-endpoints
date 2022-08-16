import { IoTDataPlaneClient, PublishCommand, PublishCommandInput } from "@aws-sdk/client-iot-data-plane";
import { getEnvVars } from "../utils";
import { getAwsCredentials } from "./index";

/**
 * Gets an IoT client capable of querying data.
 * 
 * @returns - An instance of the client.
 */

export function getIotClient() {
    try {
        const iotEndpoint: string = getEnvVars('AWS_IOT_ENDPOINT')[0];
        const iotRegion: string = getEnvVars('AWS_REGION')[0];
        return new IoTDataPlaneClient({ credentials: getAwsCredentials() , region: iotRegion, endpoint: iotEndpoint });
    } catch (e) {
        console.log(`It was not possible to create an IoT Client.\n${e}`)
    }
};

/**
 * Formats a given value into a valid query for the IoT Client.
 * 
 * @param inputValue - An Uint8Array that will be the payload for the request.
 * @returns - A formatted object with the specific type to be requested by the IoT Client.
 */

export function formatCommands(inputValue: Uint8Array) {
    const iotTopic: string = getEnvVars("AWS_TOPIC")[0];

    const params: PublishCommandInput = { payload: inputValue, qos: 1, retain: false, topic: iotTopic }

    return new PublishCommand(params);
}
