import {reimbClient} from './reimb-client';

export async function getAllReimbs(){

    let resp = await reimbClient.get('/reimbursments');
    return resp.data;

}