const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {
  router.get('/direct_messages', function (req, res) {
    const queryString = `
    SELECT message, from_user_id, created
    FROM direct_messages
    JOIN users ON users.id = direct_messages.from_user_id
    WHERE users.username = 'mario'
    `;
    
      return pool
      .query(queryString)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log('error:', err.message);
      });

      
  });

  router.get('/direct_messages/to', function (req, res) {
    const queryString = `
    Select message, to_user_id, created
    FROM direct_messages
    JOIN users ON users.id = direct_messages.to_user_id
    WHERE users.username = 'luigi';
    `;
    
      return pool
      .query(queryString)
      .then((data) => {
       return res.json(data.rows);

      })
      .catch((err) => {
        console.log('error:', err.message);
      });

      
  });

  //only return router
  return router;
};

// only export the function
module.exports = routers;
