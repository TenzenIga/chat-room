const server = require('http').createServer();
const io = require('socket.io')(server);


let usersList= [] // users

// [{
//   roomId:12324,
//   users:[]
// }]
//
// //create room and user
// function createRoomAndUser() {
//   return {
//     roomId:1,
//     username:'zeta'
//   };
// }
io.on('connection', function(socket){
  console.log(socket.id);
  console.log('a user connected');
  socket.on('msg', ({message, roomId}) =>{
    console.log(message);
    console.log(roomId);
    io.sockets.in(roomId).emit('msg', message)

  })

  //add user to list
  socket.on('addUser', (nickname) =>{
    usersList = [...usersList, nickname]
    socket.nickname = nickname;
    console.log(usersList);
  })

  //join room
  socket.on('join', (roomId) =>{

    socket.join(roomId, ()=>{
      console.log(`${socket.nickname} joined room ${roomId}`);
      io.sockets.in(roomId).emit('join', `${socket.nickname} joined room ${roomId}`);
    })

  })

  socket.on('disconnect', function(){
    usersList = usersList.filter(user => user !== socket.nickname)
    io.sockets.in(socket).emit('join', `${socket.nickname} joined room ${roomId}`);
   console.log(`user ${socket.nickname} disconnected`);
   console.log(usersList);
 });
});

//function send message to room



const PORT = process.env.PORT || 5000

server.listen(PORT, () =>{
  console.log('Connected to port ' + PORT);
});
