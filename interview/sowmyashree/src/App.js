import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import './App.css';
import Header from './Components/Header/Header';
import Users from './Components/Users/Users';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Users/>
    </div>
  );
}

export default App;
