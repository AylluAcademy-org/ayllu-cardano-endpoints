import { iotMessage, validMessage } from "../../types/api";

/**
 * Parse and validate incoming requests for the IoT Cardano Device.
 * 
 * @param inputPayload - The incoming JSON payload request
 * @returns - iotMessage instance.
 */
export async function formatMessage (inputPayload: any) {
    try {
        const prep = validMessage.parse(inputPayload);
        let isValid: boolean;
        if (prep.cmd.length === prep.seq) {
            if (prep.payload) {
                isValid = true ? prep.payload.length === prep.seq : false
            } else {
                isValid = true;
            };
        if (isValid) {
            return iotMessage.parse({
                message_id: Math.floor(Date.now() / 1000),
                payload: prep,
                timestamp: Date.now()
            })
        } else {
            throw TypeError("The given payload is not correct, please review the inputs!");
        }
        };
    } catch (e) {
        console.error(e);
    };
}