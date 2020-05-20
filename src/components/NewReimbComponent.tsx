import React, { SyntheticEvent, useState } from 'react';
import { Typography, FormControl, InputLabel, Input, makeStyles, Button, Select } from '@material-ui/core';
import { User } from '../models/users';
import {reimbClient} from '../remote/reimb-client';
import { Reimbursments } from '../models/reimb';
import { Link } from 'react-router-dom';

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

function NewReimbComponent (props: INewReimbProps){

    const classes = useStyles();

    const [newReimb, setNewReimb] = useState(new Reimbursments(0,0,'','','',0,0,0,0));

    let setAmount = (e: any) => {

        newReimb.amount = e.currentTarget.value;

    }

    let setDescription = (e: any) => {

        newReimb.description = e.currentTarget.value;

    }

    let setType = (e: any) => {

        newReimb.reimbTypeId = e.currentTarget.value;

    }

    let addReimb = (e: SyntheticEvent) => {

        reimbClient.post('/reimbursments', {

            id: 0,
            amount: newReimb.amount,
            submitted: null,
            resolved: null,
            description: newReimb.description,
            authorId: props.authUser.id,
            resolverId: null,
            reimbStatusId: null,
            reimbTypeId: +newReimb.reimbTypeId

        });

    }

    return(

        !props.authUser?

            <h1>Please login to view this page</h1>

        :

        <>

            <div className = {classes.registerContainer}>

                <form className = {classes.registerForm}>

                    <Typography align="center" variant = "h6" > Register for Revaboards</Typography>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "amount">Amount</InputLabel>

                        <Input onChange = {setAmount} id = "amount" type = "text" placeholder = "Amount"/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "description">Description</InputLabel>

                        <Input onChange = {setDescription} id = "description" type = "text" placeholder = "Description"/>
                                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="age-native-simple">Reimburment Type</InputLabel>
                            <Select native onChange = {setType}>
                                <option aria-label="None" value="" />
                                <option value = {1}>Lodging</option>
                                <option value = {2}>Travel</option>
                                <option value = {3}>Food</option>
                                <option value = {4}>Other</option>
                            </Select>
                    </FormControl>

                    <br/> <br/>

                    <Link to = '/myreimbursments' onClick= {addReimb}>Submit</Link>

                </form>

            </div>


        </>

    );

}

export default NewReimbComponent;