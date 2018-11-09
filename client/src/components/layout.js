import React from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Sidebar from './sidebar';
import Messages from './messages';
import MessageInput from './messageInput';
import JoinRoom from './joinRoom';
const Layout = ({socket, nickname, sendMessage, joinRoom}) => {
  return (
    <div>
    <Header socket={socket} nickname={nickname} />
  <main className='chat-container'>
    <JoinRoom joinRoom={joinRoom}/>
    <Messages />
      <Sidebar />
      <MessageInput sendMessage={sendMessage} />
  </main>
    </div>
  );
}

export default Layout
