import React, { SyntheticEvent, useState } from 'react';
import { Typography, FormControl, InputLabel, Input, makeStyles, Button, Select } from '@material-ui/core';
import { User } from '../models/users';
import {reimbClient} from '../remote/reimb-client';
import { Reimbursments } from '../models/reimb';
import { Link } from 'react-router-dom';

interface IUpdateReimbProps{

    authUser: User;
    thisReimb: Reimbursments;
    setThisReimb: (reimb: Reimbursments) => void;

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

function UpdateReimbComponent(props: IUpdateReimbProps){

    const classes = useStyles();

    const [amount, setAmount] = useState(props.thisReimb.amount);
    const [description, setDescription] = useState(props.thisReimb.description);
    const [type, setType] = useState(props.thisReimb.reimbTypeId);


    let updateAmount = (e: any) => {

        setAmount(e.currentTarget.value);

    }

    let updateDescription = (e: any) => {

        setDescription(e.currentTarget.value);

    }

    let updateType = (e: any) => {

        setType(e.currentTarget.value);

    }

    let updateReimb = (e: SyntheticEvent) => {

        reimbClient.put('/reimbursments', {

            id: props.thisReimb.id,
            amount: amount,
            submitted: null,
            resolved: null,
            description: description,
            authorId: props.authUser.id,
            resolverId: null,
            reimbStatusId: 1,
            reimbTypeId: +type

        });

    }

    return(

        !props.authUser?

            <h1>Please login to view this page</h1>

        :

        props.thisReimb.reimbStatusId !== 1 ?

            <h1>Cannot update this reimbursment</h1>

        :

        <>

            <div className = {classes.registerContainer}>

                <form className = {classes.registerForm}>

                    <Typography align="center" variant = "h6" > Register for Revaboards</Typography>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "amount">Amount</InputLabel>

                        <Input onChange = {updateAmount} id = "amount" type = "text" value = {amount}/>
                                
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>

                        <InputLabel htmlFor = "description">Description</InputLabel>

                        <Input onChange = {updateDescription} id = "description" type = "text" value = {description}/>
                                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="age-native-simple">Reimburment Type</InputLabel>
                            <Select native onChange = {updateType} value = {type}>
                                <option value = {1}>Lodging</option>
                                <option value = {2}>Travel</option>
                                <option value = {3}>Food</option>
                                <option value = {4}>Other</option>
                            </Select>
                    </FormControl>

                    <br/> <br/>

                    {

                        props.authUser.roleId === 2 ?

                            <Link to = '/reimbursments' onClick = {updateReimb} className = "btn btn-primary btn-m">Submit</Link>
                        
                        :

                            <Link to = '/myreimbursments' onClick = {updateReimb} className = "btn btn-primary btn-m">Submit</Link>

                    }

                    

                </form>

            </div>


        </>

    );

}

export default UpdateReimbComponent;