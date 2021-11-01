const express = require('express');
const router = express.Router();


// function that will contain all the get routes
const routers = function (pool) {

  // render CommentForm 
  router.get('/', function (req, res) {
    const queryString = `
    SELECT users.profile_picture_url, users.username as username, comments.comment, comments.created, comments.id, comments.user_id, comments.content_post_id FROM users
    JOIN comments ON comments.user_id = users.id
    JOIN content_posts ON comments.content_post_id = content_posts.id
    WHERE content_posts.id = $1
    ORDER BY created DESC;`

    // hard coded
    pool.query(queryString, [2])
      .then((data) => {
        const comments = data.rows;
        res.json(comments);
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  //Post comments
  router.post('/', (req, res) => {
    console.log(req.body)
    const comment = req.body;

    const queryString = `
    INSERT INTO comments (user_id, comment, content_post_id)
    VALUES 
    ($1, $2, $3)
    RETURNING *;`

    const value = [comment.userId, comment.text, comment.postId];

    pool.query(queryString, value)
      .then((data) => {
        console.log("comment POST", data.rows[0])
        res.json(data.rows[0]);
      })
      .catch(err => {
        console.log('error:', err.message);
        res.status(500).json({ errror: "Something's wrong..." });
      });
  });

  // Delete comment
  router.delete("/:comment_id", (req, res) => {

    const queryString = `
    DELETE FROM comments
    WHERE id = $1;`;

    const comment_id = req.params.comment_id;

    pool.query(queryString, [comment_id])
      .then((data) => {
        res.json(data.rows[0]);
      })
      .catch(err => {
        console.log('error:', err.message);
        res.status(500).json({ errror: "Something's wrong in router.delete route ..." });
      });

  });

  //only return router
  return router;
}

// only export the function
module.exports = routers;

