import React, { SyntheticEvent } from 'react';
import {Redirect} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getAllReimbs } from '../remote/reimb-services';
import { User } from '../models/users';

export interface IHomeProps{

    authUser: User;

}

function HomeComponent(props: IHomeProps) {

    return (
        !props.authUser.username ?
            <Redirect to = "/login"/> :
        
        <>
            <div className = "mx-auto">
                <h1 className = "display-4">Welcome, {props.authUser.username}</h1>
            </div>
            

        </>
    );

}

export default HomeComponent;