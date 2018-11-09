import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout';
import Register from './components/register';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');


class App extends Component {
  constructor(props){
  super(props);
    this.state={
    nickname:'zeta',
    roomName:''
    }
    this.registerUser = this.registerUser.bind(this);
}
  registerUser({nickname}){
    this.setState({
      nickname
    })
  }
  
  componentDidMount(){
    console.log(socket);
    socket.on('msg', msg => console.log(msg))
  }
  render() {
  const layout = this.state.nickname ? <Layout nickname={this.state.nickname} socket={socket} /> : <Register registerUser ={this.registerUser}/>
    return (
      <div className="App">
        {layout}
      </div>
    );
  }
}

export default App;
