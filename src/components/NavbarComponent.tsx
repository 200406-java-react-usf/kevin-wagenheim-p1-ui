import React from 'react';
import {User} from '../models/users';
import {makeStyles, List, Typography, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';

interface INavBarProps{



}

const useStyles = makeStyles({

    link:{
        textDecoration: "none",
        color: "white"
    }

});

const NavbarComponent = (props: INavBarProps) => {

    const classes = useStyles();

    return(
        <>
            <List component = "nav">

                <ListItem component = "div">

                    <Typography color = "inherit" variant = "h5">Reimbursments</Typography>

                    <ListItemText inset>
                        <Typography color = "inherit" variant = "h6">
                            Home
                        </Typography>
                    </ListItemText>

                    <ListItemText inset>
                        <Typography color = "inherit" variant = "h6">
                            <Link to = "/login" className = {classes.link}>Login</Link>
                        </Typography>
                    </ListItemText>

                    <ListItemText inset>
                        <Typography color = "inherit" variant = "h6">
                            Register
                        </Typography>
                    </ListItemText>

                </ListItem>

            </List>
        </>
    )

}

export default NavbarComponent;