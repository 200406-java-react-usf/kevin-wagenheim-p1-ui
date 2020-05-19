import React from 'react';
import {Reimbursments} from '../models/reimb';
import {User} from '../models/users';

interface IReimbDetailsProps{

    authUser: User;
    thisReimb: Reimbursments;

}

function ReimbDetailsComponent(props: IReimbDetailsProps){

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

        </>

    );

}

export default ReimbDetailsComponent;