const server = require('http').createServer();
const io = require('socket.io')(server);


let usersList= [] // users
io.on('connection', function(socket){
  console.log(socket.id);
  console.log('a user connected');

  socket.on('msg', ({message, roomId}) =>{
    console.log(message);
    console.log(roomId);
    io.emit(roomId, message)
    io.emit('msg', message)

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
      io.emit(roomId, 'user connected');
    })

  })

  socket.on('disconnect', function(){
    usersList = usersList.filter(user => user !== socket.nickname)
   console.log(`user ${socket.nickname} disconnected`);
   console.log(usersList);
 });
});

//function send message to room



const PORT = process.env.PORT || 5000

server.listen(PORT, () =>{
  console.log('Connected to port ' + PORT);
});
