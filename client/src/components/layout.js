import React from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Sidebar from './sidebar';
import Messages from './messages';
import MessageInput from './messageInput';
import JoinRoom from './joinRoom';
const Layout = ({mobileOpen, handleDrawerToggle, socket, nickname, sendMessage, joinRoom}) => {
  return (
    <div>
  <Header socket={socket} nickname={nickname} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <main className='chat-container'>
        <Messages />
      <Sidebar joinRoom={joinRoom} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

      <MessageInput sendMessage={sendMessage} />
    </main>
    </div>
  );
}

export default Layout
