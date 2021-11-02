const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/:id', function (req, res) {
    console.log("get favorites", req.params.id)
    const queryString = `  
    SELECT content_posts.id, favourites.id, image_video_url, description, created, users.username
    FROM content_posts
    JOIN favourites ON favourites.content_post_id = content_posts.id
    JOIN users ON content_posts.user_id = users.id
    WHERE favourites.user_id = $1
    ORDER BY favourites.id DESC`;

    pool.query(queryString, [req.params.id])
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  router.post("/", (req, res) => {
    const queryString = `INSERT INTO favourites (user_id, content_post_id)
    VALUES 
    ($1,$2);`;

    const user_id = req.body.id;
    const content_post_id = req.body.post_id;
    console.log(user_id)
    console.log(content_post_id)

    const val = [user_id, content_post_id];

    pool.query(queryString, val)
      .then((result) => {
        res.json(result.data.rows[0])
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.delete("/:id", (req, res) => {
    console.log("delete", req.params.id)
    const queryString = `
    DELETE FROM favourites
    WHERE favourites.id = $1;`;

    const params = [req.params.id]

    pool.query(queryString, params)
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
