const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/forum', function (req, res) {

    const queryString = `
    SELECT * FROM forum_posts 
    JOIN users ON users.id = forum_posts.user_id
    WHERE users.id = 1
    ORDER BY created DESC`

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

