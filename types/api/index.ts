import { z } from "zod";

/**
 * Payload to be packed into a Message.
 * 
 * client_id - The identifier for the IoT Device.
 * seq - The number of commands to execute.
 * cmd - The commands to execute.
 * payload? - The arguments to execute.
 */

export const validMessage = z.object({
    client_id: z.string(),
    seq: z.number(),
    cmd: z.string().array(),
    payload: z.optional(z.string().array())
});

/**
 * Message to be published to IoT Topic.
 * 
 * message_id - The 
 */

export const iotMessage = z.object({
    message_id: z.string(),
    payload: validMessage,
    timestamp: z.optional(z.date())
});