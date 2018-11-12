import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class JoinRoom extends React.Component {
  constructor(props){
    super(props)
    this.state={
      open: false,
      roomId:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }
  handleClickOpen(){
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleChange(e){
    this.setState({
      roomId:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const {roomId} = this.state;
    this.props.joinRoom(roomId)
    this.setState({
      roomId:'',
      open: false
    })
  }
  render () {
  return (
    <div>
        <Button fullWidth={true} onClick={this.handleClickOpen}>Join room</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter Room</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To join room, please enter Room ID
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={this.state.roomId}
              onChange={this.handleChange}
              label="Room ID"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Join
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
  }
}

export default JoinRoom;
