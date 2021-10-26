const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/favourites', function (req, res) {

    const queryString = `  
      SELECT description, created
      FROM content_posts
      JOIN favourites ON content_post_id = content_posts.id
      JOIN users ON favourites.user_id = users.id
      WHERE users.id = 3
      ORDER BY created DESC;`

    pool.query(queryString)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  //only return router
  return router;
}

// only export the function
module.exports = routers;