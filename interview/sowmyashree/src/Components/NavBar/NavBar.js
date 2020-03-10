import React from 'react';
import './NavBar.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class Navigation extends React.Component {
    render(){
        return(
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><a href="#Users">Users</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        )
    }
}

export default Navigation;

