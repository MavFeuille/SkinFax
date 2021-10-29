const express = require('express');
const router = express.Router();


// function that will contain all the get routes
const routers = function (pool) {

  // render CommentForm 
  router.get('/', function (req, res) {

    const queryString = `
    SELECT users.username as username, comments.comment, comments.created FROM comments
    JOIN content_posts ON content_post_id = content_posts.id
    JOIN users ON content_posts.user_id = users.id
    WHERE content_posts.id = 1
    ORDER BY created DESC;`

    pool.query(queryString, [26])
      .then((data) => {
        const comments = data.rows;
        res.json(comments);
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  //Post comments
  router.post('/postComment', async (req, res) => {
    
    console.log("🚀 ~ file: comments.js ~ line 31 ~ router.post ~ req.body", req.body.comment);

    const queryString = `
    INSERT INTO comments (user_id, comment, content_post_id)
    VALUES 
    ($1, $2, $3)
    RETURNING *;`

    const value = [1, req.body.comment, 2];
    
      pool.query(queryString, value)
        .then((data) => {
          console.log("🚀 ~ file: comments.js ~ line 43 ~ .then ~ data", data)
          res.json(data.rows[0]);
        })
        .catch(err => {
          console.log('error:', err.message);
          res.status(500).json({errror: "Something's wrong..."});
        });
  });

  //only return router
  return router;
}

// only export the function
module.exports = routers;

