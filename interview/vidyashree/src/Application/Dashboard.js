import React, { Component } from 'react'
import UserDetails from './UserDetails'

export default class Dashboard extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#D3D3D3', height: '690px' }}>
                <div align="left" style={{ margin: '20px' }}>
                    <h1>User Details</h1>
                </div>
                <UserDetails />
            </div>
        )
    }
}