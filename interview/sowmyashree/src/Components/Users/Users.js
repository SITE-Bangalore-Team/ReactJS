import React from 'react';
import './Users.css';
import UsersList from './UsersList/UsersList';
import UserProfile from './UserProfile/UserProfile';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList : true,
            rowData: {}
        }
    }

    showUsersList = () => {
        this.setState({showList : true})
    }

    showUserProfile = (rowData) => {
        this.setState({ showList: false, rowData: rowData})
    }

    render() {
        return (
            <div className='Users-page'> 
                <div className='ButtonClass'>
                    <button onClick={this.showUsersList}>Users List</button>
                    <span hidden={this.state.showList}> User Profile</span>
                </div>
                <div>
                    {this.state.showList ? <UsersList showUserProfile={this.showUserProfile}/> : <UserProfile rowData={this.state.rowData}/>}
                </div>
            </div>
        )
    }
}

export default Users;       