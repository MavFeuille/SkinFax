const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/create_post', function (req, res) {
    const queryString = `
    SELECT * FROM content_posts;`

    pool.query(queryString)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
    
 
  });

  // router.post('/create_post', function (req, res) {

  //   const queryString = `
  //   INSERT INTO content_posts (user_id, image_video_url, description)
  //   VALUES 
  //   (2, 'url','Luigi is trying to say something');`

  //   pool.query(queryString)
  //     .then((data) => {
  //       res.json(data.rows)
  //     })
  //     .catch(err => {
  //       console.log('error:', err.message);
  //     });
  // });
  //only return router
  return router;
}

// only export the function
module.exports = routers;

