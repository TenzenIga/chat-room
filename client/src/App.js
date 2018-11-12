import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout';
import Register from './components/register';
import CssBaseline from '@material-ui/core/CssBaseline';

import io from 'socket.io-client';

const socket = io('http://localhost:5000');


class App extends Component {
  constructor(props){
  super(props);
    this.state={
    mobileOpen: false,
    nickname:'',
    roomId:'',
    users:[]
    }
    this.registerUser = this.registerUser.bind(this);
}
  registerUser({nickname}){
    //save user && send user nickname and id to server
  socket.emit('addUser', (nickname))

    this.setState({
      roomId:socket.id,
      nickname
    })
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

sendMessage = (message)=>{
  const {roomId} = this.state;
  socket.emit('msg', ({message, roomId}))
}

joinRoom = (roomId)=>{
  this.setState({
    roomId
  })
  socket.emit('join', roomId)
}
  componentDidMount(){

    const {roomId} = this.state;
    console.log(roomId);
    socket.on('msg', (message) =>{
       console.log(message)
     })

     socket.on('join', (message) =>console.log(message))
  }
  render() {
  const {nickname, users, mobileOpen} = this.state;
  const layout = this.state.nickname ? <Layout mobileOpen={mobileOpen} handleDrawerToggle={this.handleDrawerToggle} nickname={nickname} users={users} socket={socket} joinRoom={this.joinRoom} sendMessage={this.sendMessage} /> : <Register registerUser ={this.registerUser}/>
    return (
      <div className="App">
        <CssBaseline />
        {layout}
      </div>
    );
  }
}

export default App;
