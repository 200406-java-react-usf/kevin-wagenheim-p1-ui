import React, { useEffect, useState } from 'react';
import { User } from '../models/users';
import { getAllUsers } from '../remote/user-service';

interface IUserProps{

    authUser: User;

}

const UserComponent = (props: IUserProps) => {
    //@ts-ignore

    const [usersState, setUsersState] = useState([] as User[]);

    let users: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getAllUsers();
            
            for(let user of response){

                users.push(

                    <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.roleId}</td>
                    </tr>

                )

            }
            
            setUsersState(users);

        }

        fetchData();

    },[]);

    return (

        !props.authUser || (props.authUser.roleId !== 1) ?
        
        <>
            <h1>Youre not authorized to view this page</h1>
        </>
        
        :
        
        <>
            <h1>User Component</h1>
            
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>

                <tbody>
                    {usersState}
                </tbody>

            </table>

        </>
    );

}

export default UserComponent;