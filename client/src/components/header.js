import React from 'react'
import PropTypes from 'prop-types'

const Header = ({nickname, socket}) => {
  return (
    <header>
    <h1>Chat Room {socket.id}</h1>
    <h2>Welcome {nickname}</h2>
    </header>
  )
}

export default Header;
