import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout';
import Register from './components/register';
import CssBaseline from '@material-ui/core/CssBaseline';
import {getTime} from './utils/functions';
import io from 'socket.io-client';
import {GET_USERS, MESSAGE, ADD_USER, JOIN, LEAVE, TYPING} from './utils/consts.js';
import {createUser} from './utils/functions.js';
const socket = io('http://localhost:5000');


class App extends Component {
  constructor(props){
  super(props);
    this.state={
      messages: [],
      mobileOpen: false,
      nickname:'',
      roomId:'',
      users:[],
      typingUsers:[],
      notification:''
    }
    this.registerUser = this.registerUser.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
}
  registerUser({nickname}){
    //save user && send user nickname and id to server
    let newUser = createUser(socket.id, nickname)
  socket.emit(ADD_USER, (newUser))
      this.setState({
      roomId:newUser.roomID,
      nickname,
      users:[...this.state.users, nickname]
      })
  }
  //sidebar drawler on mobile
  handleDrawerToggle(){
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  sendMessage(message){
      const {roomId} = this.state;
      socket.emit(MESSAGE, ({message, roomId, time:getTime() }))
    }
  //Join room and set new room id
  joinRoom(roomId){
      this.setState({
        roomId
      })
      socket.emit(JOIN, roomId)
      }

  sendTyping=(isTyping)=>{
      const {nickname, roomId} = this.state;
        socket.emit(TYPING, {isTyping, nickname, roomId})
      }
  componentDidMount(){
    //get messsage
      socket.on(MESSAGE, (message) =>{
         this.setState({
           messages:[...this.state.messages, message]
         })
       })
       //om user join refresh users list
       socket.on(GET_USERS, (users)=>{
       this.setState({
         users
        })
        })

        //check for typing
        socket.on(TYPING,({isTyping, nickname}) =>{

          if(isTyping && nickname !== this.state.nickname){ // if user typing => add him to the list
            this.setState({
              typingUsers:[...this.state.typingUsers, nickname]
            })
          }
          if (!isTyping && nickname !== this.state.nickname) { //when user stops typing delete him from list
            this.setState({
              typingUsers:this.state.typingUsers.filter(user => user !== nickname)
            })
          }
        })

      //On user disconect refresh users state
      socket.on(LEAVE, (usersList) =>{
    this.setState({
      users:usersList
    })
  })

      }
  render() {
    const {nickname, users, mobileOpen, messages, roomId, typingUsers} = this.state;
    const layout = this.state.nickname ? <Layout mobileOpen={mobileOpen} handleDrawerToggle={this.handleDrawerToggle} nickname={nickname} users={users} roomId={roomId} joinRoom={this.joinRoom} sendMessage={this.sendMessage} messages={messages} sendTyping={this.sendTyping} typingUsers={typingUsers} /> : <Register registerUser ={this.registerUser}/>

  return (
        <div className="App">
          <CssBaseline />
          {layout}
        </div>
      );
    }
    }

export default App;
