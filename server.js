const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log(socket.id);
  console.log('a user connected');




  socket.on('msg', ({message, roomId}) =>{
    io.emit(roomId, message)
  })

  //join room
  socket.on('join', (roomId) =>{
    socket.join(roomId)
  })

  socket.on('disconnect', function(){
   console.log('user disconnected');
 });
});

//function send message to room



const PORT = process.env.PORT || 5000

server.listen(PORT, () =>{
  console.log('Connected to port ' + PORT);
});
