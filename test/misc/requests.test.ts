import { getUserById } from "../../src/misc/requests";
import { userData } from "../../types/backend";

describe("Should test all the request functions", () => {
    it("Should get a user by id", async () => {
        const result = await getUserById(1);
        expect(result).toEqual(userData.parse({
            user_id: 1,
            name: "David Quintanilla",
            email: "Davidquinta@gmail.com",
            password: "quinta123",
            wallet: "0x00000",
            image: "imagen1",
            totalRewards: 0,
            createdAt: "2022-07-11T05:35:36.990Z",
            updatedAt: "2022-07-11T05:35:36.990Z"
        }))
    } )
})