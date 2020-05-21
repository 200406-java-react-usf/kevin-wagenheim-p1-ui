import React, { useEffect, useState } from 'react';
import {Reimbursments} from '../models/reimb';
import {getAllReimbs, getReimbById} from '../remote/reimb-services';
import {User} from '../models/users';
import { Link } from 'react-router-dom';

interface IReimbProps{

    authUser: User;
    setThisReimb: (reimb: Reimbursments) => void;

}

const ReimbComponent = (props: IReimbProps) =>{

    const [reimbsState, setReimbsState] = useState([] as Reimbursments[]);
    const [reimbStatus, setReimbStatus] = useState(0);
    const [reimbType, setReimbType] = useState(0);

    let updateStatus = (e: any) => {

        setReimbStatus(e.currentTarget.value);

    }

    let updateType = (e: any) => {

        setReimbType(e.currentTarget.value);

    }

    let reimbs: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getAllReimbs();

            for(let reimb of response){

                if((reimb.reimbStatusId == reimbStatus || reimbStatus == 0) && (reimb.reimbTypeId == reimbType || reimbType == 0)){

                    reimbs.push(

                        <tr>
    
                            <td>{reimb.amount}</td>
                            <td>{reimb.description}</td>
                            <td>{reimb.authorId}</td>
                            <td>{reimb.resolverId}</td>
                            
                            {
                                reimb.reimbStatusId === 1 ?
                                    <td>Pending</td>
                                :
                                reimb.reimbStatusId === 2 ?
                                    <td>Denied</td>
                                :
                                reimb.reimbStatusId === 3 ?
                                    <td>Approved</td>
                                :
                                    <td>Unknown</td>
                            }
    
                            {
                                reimb.reimbTypeId === 1 ?
                                    <td>Lodging</td>
                                :
                                reimb.reimbTypeId === 2 ?
                                    <td>Travel</td>
                                :
                                reimb.reimbTypeId === 3 ?
                                    <td>Food</td>
                                :
                                    <td>Other</td>
                            }
    
                            <td><Link to = {`/reimbursmentdetails-${reimb.id}`} onClick = {
                                async () => {
                                    const response = await getReimbById(reimb.id);
                                    props.setThisReimb(response);
                                }
                            }>Details</Link></td>
    
    
                        </tr>
    
                    )

                }

            }

            setReimbsState(reimbs)

        }

        fetchData();

    }, [reimbStatus, reimbType, reimbs]);

    return(
        !props.authUser || (props.authUser.roleId !== 2) ?

            <h1>You are not authorized to view this page</h1>
        
        :

        <>

            <h1>Reimbursments</h1>

            <table>

                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Resolver</th>
                        <th>Status</th>
                        <select value = {reimbStatus} onChange = {updateStatus}>
                            <option value = {0}>All</option>
                            <option value = {1}>Pending</option>
                            <option value = {2}>Denied</option>
                            <option value = {3}>Approved</option>
                        </select>
                        <th>Type</th>
                        <select value = {reimbType} onChange = {updateType}>
                            <option value = {0}>All</option>
                            <option value = {1}>Lodging</option>
                            <option value = {2}>Travel</option>
                            <option value = {3}>Food</option>
                            <option value = {4}>Other</option>
                        </select>
                    </tr>
                </thead>

                <tbody>
                    {reimbsState}
                </tbody>

            </table>

        </>

    )

}

export default ReimbComponent;