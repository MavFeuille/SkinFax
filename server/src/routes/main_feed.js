const express = require('express');
const router = express.Router();
const cloudinaryWithConfig = require('../cloudinary_config');

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/', async (req, res) => {

    const { resources } = await cloudinaryWithConfig.search.expression(
      'folder:skinfax_setup'
      ).sort_by('public_id', 'desc')
      .max_results(500)
      .execute();

      const publicIds = resources.map(file => file.public_id)
      res.send(publicIds);


    const queryString = `
    SELECT users.username as following_user, image_video_url, description, created FROM content_posts
    JOIN users ON content_posts.user_id = users.id
    JOIN followers ON followers.user_id = users.id 
    WHERE followers.follower_user_id = 1
    ORDER BY created DESC;`

    pool.query(queryString)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });
  //only return router
  return router;
}

// only export the function
module.exports = routers;

