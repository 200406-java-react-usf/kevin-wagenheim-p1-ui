import React, { useEffect, useState } from 'react';
import {Reimbursments} from '../models/reimb';
import {User} from '../models/users';
import { getUserReimbs } from '../remote/reimb-services';

interface IUserReimbsProps{

    authUser: User;

}

function UserReimbsComponent(props: IUserReimbsProps){

    const [reimbState, setReimbState] = useState([] as Reimbursments[]);

    let reimbs: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getUserReimbs(props.authUser.id);

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

            setReimbState(reimbs)

        }

        fetchData();

    }, []);

    return(

        !props.authUser ?

            <h1>Please login to view this page</h1>
        
        :

        <>

            <h1>My Reimbursments</h1>

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
                    {reimbState}
                </tbody>

            </table>

        </>

    );

}

export default UserReimbsComponent;