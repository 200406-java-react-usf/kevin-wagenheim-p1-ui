import {reimbClient} from './reimb-client';

export async function getAllReimbs(){

    let resp = await reimbClient.get('/reimbursments');
    return resp.data;

}

export async function getUserReimbs(inputId: number){

    let resp = await reimbClient.post('/reimbursments/myreimbursments', {
        id: inputId
    });
    return resp.data;

}

export async function getReimbById(inputId: number){

    let resp = await reimbClient.get(`/reimbursments/id/${inputId}`);
    return resp.data;

}