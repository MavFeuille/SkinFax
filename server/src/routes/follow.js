const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  //Follow
  router.post('/:follow_id', function (req, res) {
    console.log("following id", req)
    const queryString = `  
    INSERT INTO followers (follower_user_id, user_id)
    VALUES ($1, $2)
    RETURNING *;`

    pool.query(queryString, [req.body.userID, req.params.follow_id])
    .then((data) => {
        console.log("🚀 ~ file: follow.js ~ line 15 ~ data", data.rows)
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  //Get the list of people that the user is following
  router.get('/:follower_user_id', function (req, res) {
    console.log("follower_user_id", req)
    const queryString = `  
    SELECT users.id, username FROM users
    JOIN followers ON users.id = user_id
    WHERE follower_user_id = $1;`
      

    pool.query(queryString, [req.params.follower_user_id])
    .then((data) => {
        console.log("🚀 ~ file: follow.js ~ line 38 ~ .then ~ data", data.rows)
        const reply = data.rows.map(row => row.id)  
        res.json(reply)
    })
      .catch(err => {
        console.log('error in follow.js line 42 for following:', err.message);
      });
  });

  //Unfollow
  router.delete("/:follower_user_id/:following_user_id", (req, res) => {
    console.log("delete", req.params.id)
    const queryString = `
    DELETE FROM followers
    WHERE follower_user_id= $1 AND followers.user_id = $2;`;

    // const params = [req.params.id]

    pool.query(queryString, req.body.userID, req.params.following_user_id)
      .then(() => {
        res.status(204).send('')
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

  //only return router
  return router;
}

// only export the function
module.exports = routers;