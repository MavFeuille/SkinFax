//NEWEST
// load .env data into process.env
require('dotenv').config();

// ____________________Web server config_______________________________
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
//___new vars for sockeetio____
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./helpers/Users')
//_____________________________
const dbParams = require('./dbConfig');
const { Pool } = require('pg');
const pool = new Pool(dbParams);
const cloudinaryWithConfig = require('./cloudinary_config')
const morgan = require('morgan')

app.use(express.json());
app.use(morgan("tiny"));

// APP ROUTES -----------------------------------------------
const postsRouter = require('./routes/posts');
const profileRouter = require('./routes/profile');
const favouritesRouter = require('./routes/favourites');
const commentsRouter = require('./routes/comments');
const messagesRouter = require('./routes/messages');

app.use('/api/posts', postsRouter(pool));
app.use('/api/profile', profileRouter(pool));
app.use('/api/favourites', favouritesRouter(pool));
app.use('/api/comments', commentsRouter(pool));
app.use('/api/messages', messagesRouter(pool));


//connected as a client-side socket
//if err auto removed from funct
io.on('connection', (socket) => {
  console.log('we have new connection!!!');
  //area manages a specific socket that just joined

  //view event from direct messages when its being emitted, grants access to name/room on backend

  socket.on('Join', ({ name, room }, callback) => {
    // console.log({name, room})
    //triggers a response after event emitted
    // console.log('join event triggered=====')

    //addUser funct expects err/user
    const { error, user } = addUser({ id: socket.id, name, room });

    //kicks out
    if (error) return callback(error);

    //emitted from backend -> frontend
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the new room ${user.room}` })
    // console.log('user____', user)
    // sends msg to e/o
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, just joined!` })

    socket.join(user.room);
    callback();
  })

  //events for user generated msgs
  //expects event on backend than transfers -> frontend
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)
    console.log('message____test', message)
    console.log('soc id____test', socket.id, user)
    io.to(user.room).emit('message', { user: user.name, text: message })

    callback();
  })



  //no param b/c user just left
  socket.on('disconnect', () => {
    console.log('user just left');
  });
});

server.listen(PORT, console.log(`Server is listening on port ${PORT}`));
