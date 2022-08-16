import axios from "axios";
import { userData } from "../../types/backend";
import { getEnvVars } from "../utils";

import type { AxiosResponse } from "axios";
import type { UserData } from "../../types/backend";

const URL = getEnvVars("AWS_API", true)[0];

/**
 * Base function for GET request to `user` route.
 * 
 * @param route - The specification inside the `user` route.
 * @param queryParams - The parameters to be passed down to the query.
 * @returns - The result from the request.
 */

const userRoute = async ( route: string, queryParams?: any ) => {

    const endpoint: string = `${URL}/users/${route}`;
    let result: AxiosResponse;

    try {
        if (queryParams !== undefined) {
            result = await axios.get(
                    endpoint, {
                        params: queryParams
                })
        } else {
            result = await axios.get(endpoint);
        }
        return result.data;

    } catch(e) {
        console.error(e);
    }
};

/**
 * Function to get user by id
 * 
 * @param id - The target `id` of the user
 * @returns - The general information from the user
 */

export const getUserById = async ( id: number ) => {
    const result: UserData = userData.parse(
        await userRoute(
            'getUserById', { user_id: id }
            )
        );
    return result;
    
}