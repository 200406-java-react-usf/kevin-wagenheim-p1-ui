import React, { useEffect, useState } from 'react';
import { User } from '../models/users';
import { getAllUsers } from '../remote/user-service';

interface IUserProps{

    authUser: User;

}

const UserComponent = (props: IUserProps) => {
    //@ts-ignore

    const [usersState, setUsersState] = useState([] as User[]);

    // getAllReimbs().then(function (data){

    //     console.log(data);

    // });

    let users: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getAllUsers();
            
            for(let user of response){

                users.push(

                    <div key = {user.id} >{user.firstName}</div>

                )

            }
            
            setUsersState(users);

        }

        fetchData();

    },[]);

    return (

        !props.authUser || (props.authUser.roleId !== 2) ?
        
        <>
            <h1>Youre not authorized to view this page</h1>
        </>
        
        :
        
        <>
            <h1>User Component</h1>
            {usersState}

        </>
    );

}

export default UserComponent;