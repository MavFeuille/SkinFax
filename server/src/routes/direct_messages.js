const express = require('express');
const router = express.Router();
// function that will contain all the get routes;
const routers = function (pool) {

  router.get('/direct_messages', function (req, res, next) {

    const queryString = `
    SELECT *
    FROM direct_messages
    INNER JOIN(                                     
    SELECT MAX(id) as id FROM (
    SELECT MAX(id) as id, from_user_id as contact
    FROM direct_messages
    WHERE to_user_id = 2
    GROUP BY from_user_id
    UNION ALL
    SELECT MAX(id) as id, to_user_id as contact
    FROM direct_messages
    WHERE from_user_id = 3
    GROUP BY to_user_id
    ) t GROUP BY contact
    ) d
    ON direct_messages.id = d.id
    ORDER BY created DESC;
    `;

    return pool.query(queryString) 
      .then((data) => {
        const directMessage = data.rows;

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
  //only return router
  return router;
}

// only export the function
module.exports = routers;




