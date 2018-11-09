import React from 'react'
import PropTypes from 'prop-types'

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
    console.log(this.state.message);
  }
  render () {

  return (
    <form className='messageInput' onSubmit={this.sendMessage}>
      <input className = 'messageInput__input' type='text' placeholder='Enter message' onChange={this.typeMessage}/>
      <button className='messageInput__button' onClick={this.sendMessage}>Send Message</button>
    </form>

  );

  }
}

export default MessagInput;
