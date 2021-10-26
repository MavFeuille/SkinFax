const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/favourites', function (req, res) {

    const queryString = `  
      SELECT description, created
      FROM content_posts
      JOIN favourites ON content_post_id = content_posts.id
      JOIN users ON favourites.user_id = users.id
      WHERE users.id = 3
      ORDER BY created DESC;`;

    pool.query(queryString)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  router.post("/favourites", (req, res) => {
    const queryString = `INSERT INTO favourites (user_id, content_post_id)
    VALUES 
    ($1,$2);`;

    const user_id = req.session.user_id;
    const content_post_id = req.session.content_post_id;

    const val = [user_id, content_post_id];

    db.query(queryString, val)
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.post("/delete/:id", (req, res) => {

    const user_id = req.session.user_id;
    const removeItem = req.params.id;

    const queryString = `
    DELETE FROM favourites
    WHERE user_id = 2 AND favourites.id = 4;`;

    const val = [user_id, removeItem]

    db.query(queryString, val)
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

