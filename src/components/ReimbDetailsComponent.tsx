import React, { SyntheticEvent } from 'react';
import {Reimbursments} from '../models/reimb';
import {User} from '../models/users';
import { reimbClient } from '../remote/reimb-client';
import { Link } from 'react-router-dom';

export interface IReimbDetailsProps{

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

        !props.authUser ?

            <h1>Please login to view this page</h1>

        :

        props.thisReimb.id === 0 ?

            <h1>Please select a reimbursment in the reimbursments page</h1>

        :            

        <>

        <table className = "table">

            <thead><th><tr>{props.thisReimb.id} Reimbursment Details</tr></th></thead>

            <tbody>

                <tr><th scope="row">ID:</th></tr>
                <tr><td>{props.thisReimb.id}</td></tr>
                <tr><th scope="row">Amount:</th></tr>
                <tr><td>{props.thisReimb.amount}</td></tr>
                <tr><th scope="row">Submitted:</th></tr>
                <tr><td>{props.thisReimb.submitted}</td></tr>
                <tr><th scope="row">Resolved</th></tr>
                <tr><td>{props.thisReimb.resolved}</td></tr>
                <tr><th scope="row">Description:</th></tr>
                <tr><td>{props.thisReimb.description}</td></tr>
                <tr><th scope="row">Author:</th></tr>
                <tr><td>{props.thisReimb.authorId}</td></tr>
                <tr><th scope="row">Resolver:</th></tr>
                <tr><td>{props.thisReimb.resolverId}</td></tr>
                <tr><th scope="row">Status:</th></tr>

                {
                    props.thisReimb.reimbStatusId === 1 ?
                        <tr><td>Pending</td></tr>
                    :
                    props.thisReimb.reimbStatusId === 2 ?
                        <tr><td>Denied</td></tr>
                    :
                    props.thisReimb.reimbStatusId === 3 ?
                        <tr><td>Approved</td></tr>
                    :
                        <tr><td>Unknown</td></tr>
                }

                <tr><th scope="row">Type:</th></tr>

                {
                    props.thisReimb.reimbTypeId === 1 ?
                        <tr><td>Lodging</td></tr>
                    :
                    props.thisReimb.reimbTypeId === 2 ?
                        <tr><td>Lodging</td></tr>
                    :
                    props.thisReimb.reimbTypeId === 3 ?
                        <tr><td>Lodging</td></tr>
                    :
                        <tr><td>Other</td></tr>
                }
                

            </tbody>


        </table>

        {
            !props.thisReimb.resolved && props.authUser.roleId === 2?
            <>

                <Link to = '/reimbursments' onClick = {approveReimb} className = "btn btn-primary btn-m">Approve</Link>
                <Link to = '/reimbursments' onClick = {denyReimb} className = "btn btn-primary btn-m">Deny</Link>

            </>
        
        :
        <>

        </>
        
        }

        {

            props.thisReimb.reimbStatusId === 1 ?

            <Link to = '/updatereimbursment' className = "btn btn-primary btn-m">Update</Link>
            
            :

            <></>

        }

        </>

    );

}

export default ReimbDetailsComponent;