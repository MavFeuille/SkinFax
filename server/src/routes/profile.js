const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/profile', function (req, res, next) {

    const queryString = `
    SELECT username, profile_picture_url FROM users
    WHERE users.id = 1`


    return pool.query(queryString) 
      .then((data) => {
        const profile = data.rows[0];

        if (profile) {
          return res.json(profile)
        }
        return res.status(404).send("Profile not found")
    
      })
      .catch(err => {
        console.log('error:', err.message);
        return next (err)
      })
  });

  router.get('/profile/posts', function (req, res, next) {

    const queryString = `
    SELECT * FROM content_posts
    WHERE user_id = 1;`


    return pool.query(queryString) 
      .then((data) => {
        const posts = data.rows;
          return res.json(posts);
      })
      .catch(err => {
        console.log('error:', err.message);
        return next (err)
      })

  });
  //only return router
  return router;
}

// only export the function
module.exports = routers;

//know which user is being retrieved, u can get profil + results /users seperately. also $1 etc

