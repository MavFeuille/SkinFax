const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/profile', function (req, res) {

    const queryString = `
    SELECT username, profile_picture_url, content_posts.image_video_url, content_posts.description, content_posts.created FROM users
    JOIN content_posts ON content_posts.user_id = users.id
    WHERE users.id = 1
    ORDER BY created DESC;`

    pool.query(queryString)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      })
      
  });

  //only return router
  return router;
}

// only export the function
module.exports = routers;

//know which user is being retrieved, u can get profil + results /users seperately. also $1 etc

