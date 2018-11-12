import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginRight:240,
    display:"grid",
    gridTemplateColumns:'5fr 1fr',
    position:'fixed',
    bottom:0,
    right:0,
    left:0,
    [theme.breakpoints.down('xs')]: {
      marginRight:0,
    },
  },

  button: {
    margin: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class MessagInput extends React.Component {
  constructor(props){
    super(props)
    this.state={
      message:''
    }
  }
  typeMessage = (e)=>{
    this.setState({
      message:e.target.value
    })
  }
  sendMessage=(e)=>{
    e.preventDefault();
    this.props.sendMessage(this.state.message)
    this.setState({
      message:''
    })
  }
  render () {
const { classes } = this.props;
  return (


    <form className={classes.root} onSubmit={this.sendMessage}>
      <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder='Enter message'
          onChange={this.typeMessage}
          fullWidth
          value={this.state.message}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }} />
        <Button variant="contained" color="primary" size = 'medium' className={classes.button} onClick={this.sendMessage} >

      <Icon className={classes.rightIcon}>send</Icon>
    </Button>
    </form>

  );

  }
}

export default withStyles(styles)(MessagInput);
