const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/', function (req, res) {

    const queryString = `  
    SELECT content_posts.id, image_video_url, description, created, users.username
    FROM content_posts
    JOIN favourites ON favourites.content_post_id = content_posts.id
    JOIN users ON content_posts.user_id = users.id
    WHERE favourites.user_id = 1
    ORDER BY created DESC`;

    pool.query(queryString)
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
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.post("/delete/:id", (req, res) => {

    const queryString = `
    DELETE FROM favourites
    WHERE user_id = $1 AND favourites.id = $2;`;

    const user_id = req.session.user_id;
    const removeItem = req.params.id;

    const val = [user_id, removeItem]

    pool.query(queryString, val)
      .then(() => {
        res.redirect("/favourites");
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
