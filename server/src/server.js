//NEWEST
// load .env data into process.env
require('dotenv').config();

// ____________________Web server config_______________________________
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();
const dbParams = require('./dbConfig');
const { Pool } = require('pg');
const pool = new Pool(dbParams);
const bodyParser = require('body-parser');
const cloudinaryWithConfig = require('./cloudinary_config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '100mb' }));

// APP ROUTES -----------------------------------------------
const postsRouter = require('./routes/posts');
const profileRouter = require('./routes/profile');
const favouritesRouter = require('./routes/favourites');
<<<<<<< HEAD
const messageRouter = require('./routes/messages');
const loginRouter = require('./routes/login');
const commentsRouter = require('./routes/comments');
// const quizRouter = require('./routes/quiz');
// const postRouter = require('./routes/create_post');
=======
const messagesRouter = require('./routes/messages');
>>>>>>> 60413a5b320fad8f31dd18b69948249ac7d6d09e

app.use('/api/posts', postsRouter(pool));
app.use('/api/profile', profileRouter(pool));
app.use('/api/favourites', favouritesRouter(pool));
<<<<<<< HEAD
app.use('/api/messages', messageRouter(pool));
app.use('/api/login', loginRouter(pool));
app.use('/api/comments', commentsRouter(pool));

=======
app.use('/api/messages', messagesRouter(pool));
>>>>>>> 60413a5b320fad8f31dd18b69948249ac7d6d09e

// LOGIN/REGISTER --------------------------------------------
const usersRouter = require('./routes/users');

app.use('/api/users', usersRouter(pool));


app.listen(PORT, console.log(`Server is listening on port ${PORT}`));

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