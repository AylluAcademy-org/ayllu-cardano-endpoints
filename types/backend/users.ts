import { TypeOf, z } from "zod"; 

export const userData = z.object({
    user_id: z.number(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    wallet: z.string(),
    image: z.string(),
    totalRewards: z.number(),
    createdAt: z.string(),
    updatedAt: z.string()
});

export type UserData = z.infer<typeof userData>;