import React, {useState} from 'react';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {User} from './models/users';

import NavbarComponent from './components/NavbarComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import UserComponent from './components/UserComponent';
import ReimbComponent from './components/ReimbComponent';
import RegisterComponent from './components/RegisterComponent';
import NewReimbComponent from './components/NewReimbComponent';
import UserReimbsComponent from './components/UserReimbsComponent';
import { Reimbursments } from './models/reimb';
import ReimbDetailsComponent from './components/ReimbDetailsComponent';
import UpdateUserComponent from './components/UpdateUserComponent';

function App() {

  //@ts-ignore
  const [authUser, setAuthUser] = useState(null as User);
  //@ts-ignore
  const [thisReimb, setThisReimb] = useState(new Reimbursments(0,0,'','','',0,0,0,0));
  //@ts-ignore
  const [thisUser, setThisUser] = useState(new User(0,'','','','','',0));

  return (
    <>
    <Router>

      <AppBar color = "primary" position = "static">
        <Toolbar>                           
          <Typography variant = "h5" color = "inherit">
            <NavbarComponent authUser = {authUser} setAuthUser = {setAuthUser}/>
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path = "/login" render = {() => <LoginComponent authUser = {authUser} setAuthUser = {setAuthUser}/>}/>
        <Route path = "/home" render = {() => <HomeComponent authUser = {authUser}/>}/>
        <Route path = "/users" render = {() => <UserComponent authUser = {authUser} setThisUser = {setThisUser}/>}/>
        <Route path = "/updateuser" render = {() => <UpdateUserComponent authUser = {authUser} thisUser = {thisUser} setThisUser = {setThisUser} />}/>
        <Route path = "/reimbursments" render = {() => <ReimbComponent authUser = {authUser} setThisReimb = {setThisReimb}/>}/>
        <Route path = "/register" render = {() => <RegisterComponent authUser = {authUser}/>}/>
        <Route path = "/newreimbursment" render = {() => <NewReimbComponent authUser = {authUser}/>}/>
        <Route path = "/myreimbursments" render = {() => <UserReimbsComponent authUser = {authUser} setThisReimb = {setThisReimb}/>}/>
        <Route path = {`/reimbursmentdetails-${thisReimb.id}`} render = {() => <ReimbDetailsComponent authUser = {authUser} thisReimb = {thisReimb}/>}/>
      </Switch>

    </Router>
    </>
  );
}

export default App;
