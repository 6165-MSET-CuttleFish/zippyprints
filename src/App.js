import React, { Component } from 'react';
import  { Home }  from './views/Home';
import { Route, Switch, Redirect, BrowserRouter  } from 'react-router-dom';
import './App.css';
import FileUpload from './views/Upload/Upload';
import NavBar from './components/NavBar';
import { Auth } from './views/Auth';
import { Map } from './views/Discover'
import Dashboard from "./views/Auth/Dashboard"
import Auth2 from "./views/Auth/Auth2"
import { getAuth, onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  state = {
    // Initially, no file is selected
    user: null
  };

constructor(props){
  super(props);
  onAuthStateChanged(getAuth(), (user) => {
    this.setState({ user: user });
  });
  
}

render()  {  
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/About" component={FileUpload} />
          <Route exact path="/Auth" component={Auth} />
          <Route exact path="/Discover" component={Map} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Auth2" component={Auth2} />



        </Switch>
      </BrowserRouter>
    </div>
  );
}
}
export default App
