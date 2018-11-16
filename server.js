const express =require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const {GET_USERS, MESSAGE, ADD_USER, JOIN, LEAVE, TYPING} = require('./client/src/utils/consts.js');
if(process.env.NODE_ENV ==='production'){
	app.use(express.static('client/build'))

	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

let usersList = []
//@params userID which is just socket.ID
//allUsers
//return nickname
function getNickname(userId, allUsers){
	for(let i = 0; i < allUsers.length; i++){
  if(userId == allUsers[i].id){
  	return allUsers[i];
  }
 }
  return false;
}

//get array of socket.ids in room
function getClientsInRoom(socketId, room) {
    // get array of socket ids in this room
    let socketIds = io.sockets.adapter.rooms[room];
    let clients = [];

    if (socketIds && socketIds.length > 0) {
        //socketsCount = socketIds.lenght;

        // push every client to the result array
        for (let i = 0, len = socketIds.length; i < len; i++) {
            // check if the socket is not the requesting
            // socket
            if (socketIds.sockets[i] != socketId) {
                clients.push([Object.keys(socketIds.sockets)[i]]);
            }
        }
    }

    return clients;
}



io.on('connection', function(socket){
  //get message, roomID and time from client and send to all users in room
  socket.on(MESSAGE, ({message, roomId, time}) =>{
      console.log(socket.roomID);
      io.sockets.in(socket.roomID).emit(MESSAGE, {message, nickname:socket.nickname, time} )
  })

  //add user to list
  socket.on(ADD_USER, (newUser) =>{
      usersList = [...usersList, newUser]
      socket.nickname = newUser.nickname;
      socket.roomID = newUser.roomID;
      socket.join(socket.roomID, ()=>{
        io.sockets.in(socket.roomID).emit(GET_USERS, [newUser])
        })
    })

  //join room, for simplicity roomID === socket.id, but it's can be anything
  socket.on(JOIN, (roomId) =>{
    socket.join(roomId, ()=>{
      socket.roomID = roomId
      let users = getClientsInRoom(socket.id, roomId) //update users in room when new user joins
      let usersInRoom = users.map( user => getNickname(user, usersList))
      io.sockets.in(roomId).emit(GET_USERS, usersInRoom)
      })
  })
	socket.on(TYPING, ({isTyping,nickname, roomId}) =>{
			console.log(`${nickname} is typing ${isTyping}`);
			io.sockets.in(roomId).emit(TYPING, {isTyping, nickname})
		})
socket.on('disconnect', function(){
    //io.sockets.in(socket).emit('', `${socket.nickname} left`);
    usersList = usersList.filter(user => user.nickname !==socket.nickname);
    console.log(usersList);
    io.sockets.in(socket.roomID).emit(LEAVE, usersList)
   console.log(`user ${socket.nickname} disconnected from room ${socket.roomID}`);

 });
});



const PORT = process.env.PORT || 5000

server.listen(PORT, () =>{
  console.log('Connected to port ' + PORT);
});
