import { reimbClient } from "./reimb-client";

export async function getAllUsers(){

    let resp = await reimbClient.get('/users',{

        withCredentials: true

    });
    return await resp.data;

}
