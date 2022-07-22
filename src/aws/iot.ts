import { IoTDataPlaneClient, PublishCommand, PublishCommandInput } from "@aws-sdk/client-iot-data-plane";
import { getEnvVars } from "../utils";
import { getAwsCredentials } from "./index";

export function getIotClient() {
    try {
        const iotEndpoint: string = getEnvVars('AWS_IOT_ENDPOINT')[0];
        const iotRegion: string = getEnvVars('AWS_REGION')[0];
        return new IoTDataPlaneClient({ credentials: getAwsCredentials() , region: iotRegion, endpoint: iotEndpoint });
    } catch (e) {
        console.log(`It was not possible to create an IoT Client.\n${e}`)
    }
};

export function formatCommands(inputValue: Uint8Array) {
    const iotTopic: string = getEnvVars("AWS_TOPIC")[0];

    const params: PublishCommandInput = { payload: inputValue, qos: 1, retain: false, topic: iotTopic }

    return new PublishCommand(params);
}