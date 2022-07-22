import type { LambdaClient } from "@aws-sdk/client-lambda";
import { sendRequest, getLambdaClient } from "../../src/aws/lambda";
import { userData } from "../../types";

describe("sendRequest", () => {
    const client = <LambdaClient>getLambdaClient('');
    
    it("getClientId", async () => {
        const result = await sendRequest(client, {id: 123});

        expect(result)
            .toBe(<userData>{
                userId: 1,
                name: "Jaime",
                email: "Jaime@gmail.com",
                password: "12345",
                wallet: "0x00000",
                image: "imagen1",
                totalRewards: 0,
                createdAt: "2022-05-25T07:48:54.494Z",
                updatedAt: "2022-05-25T07:48:54.494Z"}
                );
    })
})