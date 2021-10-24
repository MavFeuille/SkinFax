const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const testRoute = function (pool) {

  router.get('/test', function (req, res) {

    pool.query('SELECT * FROM users')
      .then((data) => {
        res.json(data.rows)
      });
  });

  //only return router
  return router;
}

// only export the function
module.exports = testRoute;