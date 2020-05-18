import {reimbClient} from './reimb-client';

export async function getAllReimbs(){

    let resp = await reimbClient.get('/reimbursments');
    return resp.data;

}

export async function getUserReimbs(){

    let resp = await reimbClient.get('/myreimbursments');
    return resp.data;

}