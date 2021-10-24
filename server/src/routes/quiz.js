const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/quiz', function (req, res) {

    const queryString = `
    SELECT * FROM quiz 
    JOIN results ON results.id = quiz.results_id
    WHERE results.id = 1`

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

