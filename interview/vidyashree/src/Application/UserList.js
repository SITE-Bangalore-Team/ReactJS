import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserDialog from './UserDialog'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default class  UserList extends React.Component {
    constructor(){
        super();
        this.state={
            openDialog:false
        }
        
    }

  handleClick=(row)=>{
      console.log('row',row)
      this.setState({openDialog:true})
  }

render(){
    const {openDialog}=this.state
  return (
      <>
    <TableContainer component={Paper}>
      <Table style={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow style={{color:'blue'}}>
            <TableCell><b>ID</b></TableCell>
            <TableCell align="right"><b>First Name</b></TableCell>
            <TableCell align="right"><b>Last Name</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Photo</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.users.map(row => (
            <TableRow style={{cursor:'pointer'}} onClick={(row)=>this.handleClick(row)} key={row.id}>
                
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><img src={row.avatar} width="30px" height="30px"></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <UserDialog userData={this.props.users} openDialog={openDialog}
     />
    </>
  );
}
}