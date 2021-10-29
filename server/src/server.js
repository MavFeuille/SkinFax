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
const postsRouter = require('./routes/posts');
const profileRouter = require('./routes/profile');
const favouritesRouter = require('./routes/favourites');
const messageRouter = require('./routes/messages');
const loginRouter = require('./routes/login');
// const quizRouter = require('./routes/quiz');
// const postRouter = require('./routes/create_post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({ limit: '100mb' }));
app.use('/api/posts', postsRouter(pool));
app.use('/api/profiles', profileRouter(pool));
app.use('/api/favourites', favouritesRouter(pool));
app.use('/api/messages', messageRouter(pool));
app.use('/api/login', loginRouter(pool));

// app.use('/api/quizes', quizRouter(pool));
// app.use('/api/', postRouter(pool));



app.listen(PORT, console.log(`Server is listening on port ${PORT}`));

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