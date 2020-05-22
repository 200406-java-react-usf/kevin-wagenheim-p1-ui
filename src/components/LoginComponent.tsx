import React, {SyntheticEvent, useState} from 'react';
import {Typography, FormControl, InputLabel, Input, Button, makeStyles} from '@material-ui/core/';
import {User} from '../models/users';
import {authorize} from '../remote/auth-service';
import { Redirect } from 'react-router-dom';

export interface ILoginProps{

    authUser: User;
    setAuthUser: (user: User) => void;

}

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    loginForm: {
        width: "50%"
    }
});

function LoginComponent(props: ILoginProps){

    const classes = useStyles();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    let updateUsername = (e: any) => {

        setUsername(e.currentTarget.value);

    }

    let updatePassword = (e: any) => {

        setPassword(e.currentTarget.value);

    }

    let login =  async (e: SyntheticEvent) => {

        let authUser = await authorize(username, password);
        props.setAuthUser(authUser);

    }

    return(

        props.authUser ? 
            <Redirect to = "/home"/> : 
        
        <>

            <div className = {classes.loginContainer}>

                <form className = {classes.loginForm}>

                    <Typography align = "center">Login</Typography>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "username"></InputLabel>

                        <Input onChange = {updateUsername} value = {username} id = "username" type = "text" placeholder = "Enter a Username"/>

                    </FormControl>

                    <br></br>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "password"></InputLabel>

                        <Input onChange = {updatePassword} value = {password} id = "password" type = "text" placeholder = "Enter a Password"/>

                    </FormControl>

                    <br></br>

                    <Button onClick = {login} variant = "contained" color = "primary" size = "medium">Login</Button>

                </form>

            </div>

        </>

    );

}

export default LoginComponent;