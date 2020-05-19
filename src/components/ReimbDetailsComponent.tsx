import React, { SyntheticEvent } from 'react';
import {Reimbursments} from '../models/reimb';
import {User} from '../models/users';
import { Button } from '@material-ui/core';
import { reimbClient } from '../remote/reimb-client';

interface IReimbDetailsProps{

    authUser: User;
    thisReimb: Reimbursments;

}

function ReimbDetailsComponent(props: IReimbDetailsProps){

    let approveReimb = (e: SyntheticEvent) => {

        reimbClient.put('/reimbursments/resolve', {

            id: props.thisReimb.id,
            amount: props.thisReimb.amount,
            submitted: props.thisReimb.submitted,
            resolved: null,
            description: props.thisReimb.description,
            authorId: props.thisReimb.authorId,
            resolverId: props.authUser.id,
            reimbStatusId: 3,
            reimbTypeId: props.thisReimb.reimbTypeId

        });

    }

    let denyReimb = (e: SyntheticEvent) => {

        reimbClient.put('/reimbursments/resolve', {

            id: props.thisReimb.id,
            amount: props.thisReimb.amount,
            submitted: props.thisReimb.submitted,
            resolved: null,
            description: props.thisReimb.description,
            authorId: props.thisReimb.authorId,
            resolverId: props.authUser.id,
            reimbStatusId: 2,
            reimbTypeId: props.thisReimb.reimbTypeId

        });

    }

    return(

        <>

        <table>

            <thead><th><tr>{props.thisReimb.id} Reimbursment Details</tr></th></thead>

            <tbody>

                <tr><td>ID:</td></tr>
                <tr><td>{props.thisReimb.id}</td></tr>
                <tr><td>Amount:</td></tr>
                <tr><td>{props.thisReimb.amount}</td></tr>
                <tr><td>Submitted:</td></tr>
                <tr><td>{props.thisReimb.submitted}</td></tr>
                <tr><td>Resolved</td></tr>
                <tr><td>{props.thisReimb.resolved}</td></tr>
                <tr><td>Description:</td></tr>
                <tr><td>{props.thisReimb.description}</td></tr>
                <tr><td>Author:</td></tr>
                <tr><td>{props.thisReimb.authorId}</td></tr>
                <tr><td>Resolver:</td></tr>
                <tr><td>{props.thisReimb.resolverId}</td></tr>
                <tr><td>Status:</td></tr>
                <tr><td>{props.thisReimb.reimbStatusId}</td></tr>
                <tr><td>Type:</td></tr>
                <tr><td>{props.thisReimb.reimbTypeId}</td></tr>

            </tbody>


        </table>

        {
            !props.thisReimb.resolved && props.authUser.roleId === 2?
            <>

                <Button onClick = {approveReimb} variant = "contained" color = "primary" size = "medium">Approve</Button>
                <Button onClick = {denyReimb} variant = "contained" color = "primary" size = "medium">Deny</Button>

            </>
        
        :
        <>

        </>
        
        }

        </>

    );

}

export default ReimbDetailsComponent;