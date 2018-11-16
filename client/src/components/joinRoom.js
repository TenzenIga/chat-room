import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

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
    const {roomId} = this.props;
  return (
    <div>
        <Button fullWidth={true} onClick={this.handleClickOpen}>Join room/Invite Friend</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Enter Room/Invite Friend</DialogTitle>
          <DialogContent>
              <Typography variant='subtitle1' color='default'> To invite your friend provide your Room ID:<br /></Typography>
              <Typography variant='caption' >{roomId}</Typography><br />
            <Typography align='center' variant='h5'>OR</Typography><br />
              <Typography variant='subtitle1'> To join room, please enter Room ID </Typography>

            <form onSubmit={this.handleSubmit}>
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
            </form>

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
JoinRoom.propTypes = {
  joinRoom:PropTypes.func.isRequired,
};

export default JoinRoom;
