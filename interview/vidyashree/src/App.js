import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Application/Nav'
import Dashboard from './Application/Dashboard'
import MyProfile from './Application/MyProfile'
import Header from './Application/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/myProfile">
            <MyProfile/>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/nav">
            <Nav />
          </Route>
        </Switch>
        {/* </Layout> */}
      </div>
      <Route exact path="/dashboard">
            <Dashboard />
          </Route>
      </Router> 
    </div>
  );
}

export default App;
