import React from 'react';

class UserProfile extends React.Component {
    render () {
        const {rowData} = this.props
        return (
            <div style={{padding:'50px'}}>
                <div>
                    <span>First Name : </span>
                    <span>{rowData.first_name}</span>
                </div>
                <div>
                    <span>Last Name : </span>
                    <span>{rowData.last_name}</span>
                </div>
                <div>
                    <span>Email : </span>
                    <span>{rowData.email}</span>
                </div>
            </div>
        )
    }
}

export default UserProfile;