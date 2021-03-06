import React, { useEffect, useState } from 'react';
import {Reimbursments} from '../models/reimb';
import {User} from '../models/users';
import { getUserReimbs, getReimbById } from '../remote/reimb-services';
import { Link } from 'react-router-dom';

export interface IUserReimbsProps{

    authUser: User;
    setThisReimb: (reimb: Reimbursments) => void;

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
                        } className = "btn btn-primary btn-m">Details</Link></td>


                    </tr>

                )

            }

            setReimbState(reimbs)

        }

        fetchData();

    }, [reimbs]);

    return(

        !props.authUser ?

            <h1>Please login to view this page</h1>
        
        :

        <>

            <h1>My Reimbursments</h1>

            <table className = "table table-striped">

                <thead>
                    <tr>
                        <th scope="col">Amount</th>
                        <th scope="col">Description</th>
                        <th scope="col">Author</th>
                        <th scope="col">Resolver</th>
                        <th scope="col">Status</th>
                        <th scope="col">Type</th>
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