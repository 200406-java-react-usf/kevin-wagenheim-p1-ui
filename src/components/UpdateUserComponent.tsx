import React, { SyntheticEvent, useState } from 'react';
import { Typography, FormControl, InputLabel, Input, makeStyles, Button, Select } from '@material-ui/core';
import { User } from '../models/users';
import {reimbClient} from '../remote/reimb-client';
import { Link } from 'react-router-dom';

interface IUpdateUserProps{

    authUser: User;
    thisUser: User;
    setThisUser: (newUser: User) => void;

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

function UpdateUserComponent(props: IUpdateUserProps){

    const classes = useStyles();

    const [id, setId] = useState(props.thisUser.id);
    const [username, setUsername] = useState(props.thisUser.username);
	const [password, setPassword] = useState(props.thisUser.password);
	const [firstName, setFirstName] = useState(props.thisUser.firstName);
	const [lastName, setLastName] = useState (props.thisUser.lastName);
	const [email, setEmail] = useState (props.thisUser.email);
    const [roleId, setRoleId] = useState (props.thisUser.roleId);

    let updateUsername = (e: any) => {

        setUsername(e.currentTarget.value);

    }

    let updatePassword = (e: any) => {

        setPassword(e.currentTarget.value);

    }

    let updateFirstName = (e: any) => {

        setFirstName(e.currentTarget.value);

    }

    let updateLastName = (e: any) => {

        setLastName(e.currentTarget.value);

    }

    let updateEmail = (e: any) => {

        setEmail(e.currentTarget.value);

    }

    let updateRoleId = (e:any) => {

        setRoleId(e.currentTarget.value);

    }

    let updateUser = (e: SyntheticEvent) => {

        reimbClient.put('/users', {

            id: id,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            roleId: roleId

        });

    }

    return(

        !props.authUser || (props.authUser.roleId !== 1) || props.thisUser.id === 0 ?

            <h1>You are not authorized to view this page</h1>

        :

        <>

            <div className = {classes.registerContainer}>

                <form className = {classes.registerForm}>

                    <Typography align="center" variant = "h6" > Register for Revaboards</Typography>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "username">Username</InputLabel>

                        <Input onChange = {updateUsername} value = {username} id = "username" type = "text"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "password">Password</InputLabel>

                        <Input onChange = {updatePassword} value = {password} id = "password" type = "text"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "firstName">First Name</InputLabel>

                        <Input onChange = {updateFirstName} value = {firstName} id = "firstname" type = "text"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "lastName">Last Name</InputLabel>

                        <Input onChange = {updateLastName} value = {lastName} id = "lastname" type = "text"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "email">Email</InputLabel>

                        <Input onChange = {updateEmail} value = {email} id = "email" type = "text"/>
                                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="age-native-simple">User Type</InputLabel>
                            <Select native onChange = {updateRoleId} value = {roleId}>
                                <option value = {3}>User</option>
                                <option value = {1}>Admin</option>
                                <option value = {2}>Financial Manager</option>
                            </Select>
                    </FormControl>

                    <br/> <br/>

                    <Link to = '/users' onClick = {updateUser}>Submit</Link>

                </form>

            </div>


        </>

    );

}

export default UpdateUserComponent;