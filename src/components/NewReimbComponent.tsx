import React, { SyntheticEvent, useState } from 'react';
import { Typography, FormControl, InputLabel, Input, makeStyles, Button, Select } from '@material-ui/core';
import { User } from '../models/users';
import {reimbClient} from '../remote/reimb-client';

interface INewReimbProps{

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