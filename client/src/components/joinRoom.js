import React from 'react'
import PropTypes from 'prop-types'

class JoinRoom extends React.Component {
  constructor(props){
    super(props)
    this.state={
      roomId:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
      roomId:''
    })
  }
  render () {
  return (
    <form onSubmit={this.handleSubmit}>
    <input type='text' onChange={this.handleChange} />
    </form>
  );
  }
}

export default JoinRoom;
