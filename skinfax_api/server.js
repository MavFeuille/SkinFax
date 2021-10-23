//NEWEST
// load .env data into process.env
require('dotenv').config();

// ____________________Web server config_______________________________
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();


// app.use('/', )


app.get('/', (req, res) => {
  res.send('Hello world');
});

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