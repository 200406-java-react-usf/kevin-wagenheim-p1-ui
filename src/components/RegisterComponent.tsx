import React, { SyntheticEvent, useState } from 'react';
import { Typography, FormControl, InputLabel, Input, makeStyles, Button, Select } from '@material-ui/core';
import { User } from '../models/users';
import {reimbClient} from '../remote/reimb-client';
import { Link } from 'react-router-dom';

export interface IRegisterProps{

    authUser: User;

}

const useStyles = makeStyles({
    registerContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    registerForm: {
        width: "50%"
    }
});

function RegisterComponent(props: IRegisterProps){

    const classes = useStyles();

    const [newUser, setNewUser] = useState(new User(0,'','','','','',0));

    let setUsername = (e: any) => {

        newUser.username = e.currentTarget.value;

    }

    let setPassword = (e: any) => {

        newUser.password = e.currentTarget.value;

    }

    let setFirstName = (e: any) => {

        newUser.firstName = e.currentTarget.value;

    }

    let setLastName = (e: any) => {

        newUser.lastName = e.currentTarget.value;

    }

    let setEmail = (e: any) => {

        newUser.email = e.currentTarget.value;

    }

    let setRole = (e:any) => {

        newUser.roleId = e.currentTarget.value;

    }

    let registerUser = (e: SyntheticEvent) => {

        reimbClient.post('/users', {

            id: 0,
            username: newUser.username,
            password: newUser.password,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            roleId: newUser.roleId

        })

    }

    return(

        !props.authUser || (props.authUser.roleId !== 1) ?

            <h1>You are not authorized to view this page</h1>

        :

        <>

            <div className = {classes.registerContainer}>

                <form className = {classes.registerForm}>

                    <Typography align="center" variant = "h6" > Register for Revaboards</Typography>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "username">Username</InputLabel>

                        <Input onChange = {setUsername} id = "username" type = "text" placeholder = "Username"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "password">Password</InputLabel>

                        <Input onChange = {setPassword} id = "password" type = "text" placeholder = "Password"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "firstName">First Name</InputLabel>

                        <Input onChange = {setFirstName} id = "firstname" type = "text" placeholder = "First Name"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "lastName">Last Name</InputLabel>

                        <Input onChange = {setLastName} id = "lastname" type = "text" placeholder = "Last Name"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "email">Email</InputLabel>

                        <Input onChange = {setEmail} id = "email" type = "text" placeholder = "Email Adress"/>
                                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="age-native-simple">User Type</InputLabel>
                            <Select native onChange = {setRole}>
                                <option aria-label="None" value="" />
                                <option value = {3}>User</option>
                                <option value = {1}>Admin</option>
                                <option value = {2}>Financial Manager</option>
                            </Select>
                    </FormControl>

                    <br/> <br/>

                    <Link to = '/users' onClick = {registerUser} className = "btn btn-primary btn-m">Submit</Link>

                </form>

            </div>


        </>

    );

}

export default RegisterComponent;