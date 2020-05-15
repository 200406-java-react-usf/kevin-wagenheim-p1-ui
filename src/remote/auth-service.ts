import {reimbClient} from './reimb-client';

export async function authorize(username:string, password: string){

    let resp = await reimbClient.post('/auth', {username, password});
    return await resp.data;

}