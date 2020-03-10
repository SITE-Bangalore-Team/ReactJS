import React, { Component } from 'react'
import Logo from '../assets/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button } from '@material-ui/core';

export default class Header extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white', height: '35px', margin: '2px' }}>
                <div align="left" style={{ display: 'inline', float: 'left', marginLeft: '10px' }}>
                    <Link style={{ textDecoration: 'none' }} to="/"><img src={Logo} width="80px" height="45px" alt="logo" /></Link>
                </div>
                <div align="right" style={{ display: 'inline', float: 'right', fontSize: '25px', fontWeight: 'bold', color: 'blue', marginRight: '10px' }}>
                    <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/myProfile">Vidyashree</Link>
                    <Button><Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/myProfile">profile</Link></Button>
                    <Button><Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/nav">settings</Link></Button>
                </div>
            </div>
        )
    }
}