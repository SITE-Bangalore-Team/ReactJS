import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function UserDialog(props) {
  const [open, setOpen] = React.useState(props.openDialog);

  const handleClickOpen = () => {
      const openEvent=props.openDialog
    setOpen(openEvent);
  };

  const handleClose = () => {
      console.log("asdf");
  };


const data=[...props.userData]
var arr=[]
for(var i=0; i<data.length; i++){
    arr.push(data[i].email)
}
  return (
    <div>
      <Dialog open={props.openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> User Profile Details</DialogTitle>
        <DialogContent>
  <h1>{arr[0]}</h1>
          <TextField
            // autoFocus
            style={{margin:'2px'}}
            placeholder={arr[0]}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            
          />
           <TextField
            // autoFocus
            style={{margin:'2px'}}
            placeholder={arr[0]}
            margin="dense"
            id="name"
            label="First Name"
            type="email"
            
          />
        </DialogContent>
        <DialogActions>
            <div align="center">
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
