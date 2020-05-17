import React, { useEffect, useState } from 'react';
import {Reimbursments} from '../models/reimb';
import {getAllReimbs} from '../remote/reimb-services';
import {User} from '../models/users';

interface IReimbProps{

    authUser: User;

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

                        <td>{reimb.id}</td>
                        <td>{reimb.amount}</td>
                        <td>{reimb.submitted}</td>
                        <td>{reimb.resolved}</td>
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
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Submitted</th>
                        <th>Resolved</th>
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