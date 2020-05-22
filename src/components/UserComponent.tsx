import React, { useEffect, useState, SyntheticEvent } from 'react';
import { User } from '../models/users';
import { getAllUsers, deleteUser } from '../remote/user-service';
import { Link } from 'react-router-dom';

export interface IUserProps{

    authUser: User;
    setThisUser: (user: User) => void;

}

const UserComponent = (props: IUserProps) => {
    
    const [usersState, setUsersState] = useState([] as User[]);

    let users: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getAllUsers();
            
            for(let user of response){

                users.push(

                    <>

                    <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>

                        {
                        user.roleId === 1 ?
                            <td>Admin</td> 
                            :
                        user.roleId === 2 ?
                            <td>Financial Manager</td>
                            :
                            <td>User</td>
                        }

                        <td><Link to = '/updateuser' onClick = {
                            () => {props.setThisUser(new User(user.id, user.username, user.password, user.firstName, user.lastName, user.email, user.roleId))}    
                        } className = "btn btn-primary btn-m">Update</Link></td>

                        <td><Link to = '/users' onClick = {async () => {
                            await deleteUser(user.id);
                        }} className = "btn btn-primary btn-m">Delete</Link></td>

                    </tr>

                    </>

                )

            }
            
            setUsersState(users);

        }

        fetchData();

    },[users]);

    return (

        !props.authUser || (props.authUser.roleId !== 1) ?
        
        <>
            <h1>Youre not authorized to view this page</h1>
        </>
        
        :
        
        <>
            <h1>User Component</h1>
            
            <table className = "table table-striped">

                <thead>
                    <tr>
                        <th scope = "col">Id</th>
                        <th scope = "col">First Name</th>
                        <th scope = "col">Last Name</th>
                        <th scope = "col">Username</th>
                        <th scope = "col">Email</th>
                        <th scope = "col">Role</th>
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