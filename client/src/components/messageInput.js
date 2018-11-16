import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
const styles = theme => ({
  root:{
    background:'white',
    marginRight:240,
    position:'fixed',
    bottom:0,
    right:0,
    left:0,
    display:"grid",
    height:60,
    gridTemplateColumns:'5fr 1fr',
    [theme.breakpoints.down('xs')]: {
      marginRight:0,
      },
  },

  iconSmall: {
    fontSize: 20,
  },
});

class MessagInput extends React.Component {
  constructor(props){
    super(props)
    this.state={
      message:"",
      isTyping:false
    }
    this.typeMessage = this.typeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  typeMessage(e){
    this.setState({
      message:e.target.value
    })
  }
  sendMessage(e){
    e.preventDefault();
    this.props.sendMessage(this.state.message)
    this.setState({
      message:''
    })
  }

  sendTyping=()=>{
    this.lastUpdateTime = Date.now()
    if(!this.state.isTyping){
  this.setState({isTyping:true})
  this.props.sendTyping(true)
  this.startCheckingTyping()
}
  }

  startCheckingTyping = ()=>{
  this.typingInterval = setInterval(()=>{
    if((Date.now() - this.lastUpdateTime) > 300){
      this.setState({isTyping:false})
      this.stopCheckingTyping()
    }
  }, 300)
}

  stopCheckingTyping = ()=>{
  if(this.typingInterval){
    clearInterval(this.typingInterval)
    this.props.sendTyping(false)
  }
}

  render () {
const { classes} = this.props;
const {message} =this.state;
  return (
  <form className={classes.root} onSubmit={this.sendMessage}>
      <input
            placeholder='Enter message'
            onChange={this.typeMessage}
            autoComplete = 'off'
            onKeyUp = { e => { e.keyCode !== 13 && this.sendTyping() } }
            value={message}
          />
        <Button	disabled = { message.length < 1 } variant="contained" color="primary" className={classes.button} onClick={this.sendMessage} >
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
  </form>
  );

  }
}

MessagInput.propTypes = {
  classes: PropTypes.object.isRequired,
  sendTyping: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired
};
export default withStyles(styles)(MessagInput);
