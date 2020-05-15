import React, {useState} from 'react';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarComponent from './components/NavbarComponent';
import LoginComponent from './components/LoginComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {User} from './models/users';

function App() {

  //@ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  return (
    <>
    <Router>

      <AppBar color = "primary" position = "static">
        <Toolbar>                           
          <Typography variant = "h5" color = "inherit">
            <NavbarComponent />
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path = "/login" render = {() => <LoginComponent authUser = {authUser} setAuthUser = {setAuthUser}/>}/>
      </Switch>

    </Router>
    </>
  );
}

export default App;
