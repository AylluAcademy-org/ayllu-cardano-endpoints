import { IoTDataPlaneClient,
    GetRetainedMessageCommand    
} from "@aws-sdk/client-iot-data-plane";
import express from "express";
import { getIotClient, formatCommands } from "../aws";
import { formatMessage } from "./formatter";

const app = express();

app.post("broker/messenger", async (req, res) => 
    {
        const iot = getIotClient() as IoTDataPlaneClient;
        const seq = req.body.payload.seq;
        const validReq = JSON.stringify(await formatMessage(req.body));
        const toSend = formatCommands(validReq);
        await iot.send(toSend);
        
        const command = new GetRetainedMessageCommand({
            topic: "test/topic"
        });
        const output = await iot.send(command);

        console.log(output);
        
    }, 
);