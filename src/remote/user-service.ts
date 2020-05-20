import { reimbClient } from "./reimb-client";

export async function getAllUsers(){

    let resp = await reimbClient.get('/users');
    return await resp.data;

}

export async function deleteUser(id: number){

    let resp = await reimbClient.delete('/users',{

        data:{
            user_id: id
        }

    });
    return await resp.data;

}