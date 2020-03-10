import React from 'react';

class UsersList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            UserData: []
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => 
                this.setState({UserData : data})
            )
    }

    rowClicked = (e, rowData) => {
        this.props.showUserProfile(rowData);
    }

    render () {
        const {UserData} = this.state;
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Nick Name</th>
                    </tr>
                </thead>
                <tbody>
                    {UserData.data && UserData.data.map((user, key) => {
                        return (
                        <React.Fragment>
                                <tr key={user.id} onClick={(e) => this.rowClicked(e, user)}>
                                    <td>{`${user.first_name} ${user.last_name}`}</td>
                                    <td>{user.email}</td>
                                    <td>{parseInt(Math.random()*100).toFixed(2)}</td>
                                    <td>{user.first_name}</td>
                                </tr>
                        </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
            
        )
    }
}

export default UsersList;