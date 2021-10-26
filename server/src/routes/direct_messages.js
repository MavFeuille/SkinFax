const express = require('express');
const router = express.Router();
// function that will contain all the get routes;
const routers = function (pool) {

  router.get('/direct_messages', function (req, res, next) {

    const queryString = `
    SELECT message, from_user_id, created
    FROM direct_messages
    JOIN users ON users.id = direct_messages.from_user_id
    WHERE users.username = 'mario'
    `;
    pool
      .query(queryString)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log('error:', err.message);
      });

      
  })

    return pool.query(queryString) 
      .then((data) => {
        const directMessage = data.rows[0];

        if (directMessage) {
          return res.json(directMessage)
        }
        return res.status(404).send("not available")
    
      })
      .catch(err => {
        console.log('error:', err.message);
        return next (err)
      })
  });

  router.get('/direct_message/to', function (req, res, next) {

    const  queryString = 
    `
    SELECT message, to_user_id, created
    FROM direct_messages
    JOIN users ON users.id = direct_messages.to_user_id
    WHERE users.username = 'luigi'
    `;

    return pool.query(queryString) 
      .then((data) => {
        const dm = data.rows;
          return res.json(dm);
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




