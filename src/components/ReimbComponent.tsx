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

    let reimbs: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getAllReimbs();

            for(let reimb of response){

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

            setReimbsState(reimbs)

        }

        fetchData();

    }, []);

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
                        <th>Type</th>
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