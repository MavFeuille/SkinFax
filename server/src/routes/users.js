const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/', function (req, res) {

    const queryString = `
    SELECT * FROM users;`;

    pool.query(queryString)
      .then((data) => {
        return res.json(data)
      })
  });

  router.post('/register', function (req, res) {

    console.log("body", req.body)
    const queryString = `
    INSERT INTO users (username, email, password, profile_picture_url)
    VALUES ($1, $2, $3, $4)`;

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const profilePic = 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png'

    const values = [username, email, password, profilePic];

    pool.query(queryString, values)
      .then((data) => {
        const posts = data.rows;
        return res.json(posts);
      })
      .catch(err => {
        console.log('error:', err.message);
      })

  });

  return router;
}

// only export the function
module.exports = routers;