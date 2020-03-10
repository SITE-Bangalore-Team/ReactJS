import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Users from './Components/Users/Users';
import UsersList from './Components/Users/UsersList/UsersList';
import UserProfile from './Components/Users/UserProfile/UserProfile';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/usersList" component={UsersList} />
        <Route path="/userProfile" component={UserProfile} />
      </div>
    </Router>
  )

// ReactDOM.render(routing, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
