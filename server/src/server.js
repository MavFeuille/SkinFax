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
const { addUser, removeUser, getUser, getUsersInRoom} = require('./helpers/Users')
//_____________________________
const dbParams = require('./dbConfig');
const {Pool} = require('pg');
const pool = new Pool(dbParams);
const cloudinaryWithConfig = require('./cloudinary_config');
const mainFeedRouter = require('./routes/main_feed');
const profileRouter = require('./routes/profile');
const favouritesRouter = require('./routes/favourites');
const dmRouter = require('./routes/direct_messages');
const quizRouter = require('./routes/quiz');
const createPostRouter = require('./routes/create_post');

app.use('/api', mainFeedRouter(pool));
app.use('/api', profileRouter(pool));
app.use('/api', favouritesRouter(pool));
app.use('/api', dmRouter(pool));
app.use('/api', quizRouter(pool));
app.use('/api', createPostRouter(pool));

//connected as a client-side socket
//if err auto removed from funct
io.on('connection', (socket) => {
  console.log('we have new connection!!!');
  //area manages a specific socket that just joined

  //view event from direct messages when its being emitted, grants access to name/room on backend
  
  socket.on('Join',({name, room}, callback) => {
    // console.log({name, room})
    //triggers a response after event emitted
    // console.log('join event triggered=====')

    //addUser funct expects err/user
    const {error, user} = addUser({id: socket.id, name, room});

    //kicks out
    if(error) return callback(error);

    //emitted from backend -> frontend
    socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the new room ${user.room}`})
    // console.log('user____', user)
    // sends msg to e/o
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text:`${user.name}, just joined!`})

    socket.join(user.room);

    io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    callback();
  })

  //events for user generated msgs
  //expects event on backend than transfers -> frontend
  socket.on('sendMessage',(message, callback)=> {
    const user = getUser(socket.id)
    console.log('message____test', message)
    console.log('soc id____test', socket.id, user)
    io.to(user.room).emit('message', {user: user.name, text: message})
    io.to(user.room).emit('roomData', {user: user.room, users: getUsersInRoom(user.room)})


    callback();
  } )



  //no param b/c user just left
  socket.on('disconnect', () => {
    console.log('user just left');
  });
});

server.listen(PORT, console.log(`Server is listening on port ${PORT}`));

// const bodyParser = require ('body-parser');
// const sass = require ('node-sass-middleware');
// const morgan = require ('morgan');
// const bcryptjs = require ('bcryptjs');
// const cookieSession = require ('cookie-session');
// app.use (
//   cookieSession ({
//     name: 'session',
//     keys: [
//       'eSgVkYp3s6v9y$B&E)H@McQfTjWmZq4t',
//       'z$C&F)J@NcRfUjWnZr4u7x!A%D*G-KaP',
//     ],
//   })
// );

// ________________PG database client/connection setup_________________
// const {Pool} = require ('pg');
// const dbParams = require ('./lib/db.js.js.js');
// const db = new Pool (dbParams);
// db.connect ();
//requires helper function and directly calls db
// const databaseHelpers = require ('./db/database-helper') (db);

// Warning: avoid creating more routes in this file!
