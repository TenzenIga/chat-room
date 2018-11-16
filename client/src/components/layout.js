import React from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Sidebar from './sidebar';
import Messages from './messages';
import MessageInput from './messageInput';

const Layout = ({mobileOpen, handleDrawerToggle, roomId, nickname, sendMessage, users, joinRoom, messages, typingUsers, sendTyping}) => {
  return (
    <div>
  <Header roomId={roomId} nickname={nickname} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <main className='chat-container'>
        <Messages messages={messages} typingUsers={typingUsers} />
      <Sidebar users={users} joinRoom={joinRoom} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} roomId={roomId}/>

      <MessageInput sendMessage={sendMessage} sendTyping={sendTyping} />
    </main>
    </div>
  );
}
Layout.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle:PropTypes.func.isRequired,
  sendTyping:PropTypes.func.isRequired,
  sendMessage:PropTypes.func.isRequired,
  joinRoom:PropTypes.func.isRequired,
  messages:PropTypes.array.isRequired,
  users:PropTypes.array.isRequired,
  typingUsers:PropTypes.array.isRequired,
  roomId:PropTypes.string.isRequired,
  nickname:PropTypes.string.isRequired
};
export default Layout
