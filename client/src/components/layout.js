import React from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Sidebar from './sidebar';
import Messages from './messages';
import MessageInput from './messageInput';

const Layout = ({socket, nickname}) => {
  return (
    <div>
    <Header socket={socket} nickname={nickname} />
  <main className='chat-container'>
    <Messages />
      <Sidebar />
      <MessageInput />
  </main>
    </div>
  );
}

export default Layout
