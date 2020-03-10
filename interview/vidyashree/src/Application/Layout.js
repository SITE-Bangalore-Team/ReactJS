import React, { Component } from 'react'
import Header from './Header'
import Dashboard from './Dashboard'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Dashboard />
            </div>
        )
    }
}