const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/calendar', function (req, res) {

    const queryString = `
    SELECT * FROM calendar_entries
    JOIN users ON users.id = calendar_entries.user_id
    WHERE users.id = 1`

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

