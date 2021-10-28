const express = require('express');
const router = express.Router();
const cloudinaryWithConfig = require('../cloudinary_config');

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/', async (req, res) => {

    // const { resources } = await cloudinaryWithConfig.search.expression(
    //   'folder:skinfax_setup'
    //   ).sort_by('public_id', 'desc')
    //   .max_results(30)
    //   .execute();

    //   const publicIds = resources.map(file => file.public_id)
    //   res.json(publicIds);

    
    //1
    // SELECT users.username as username, image_video_url, description, created 
    // FROM content_posts
    // JOIN users ON content_posts.user_id = users.id
    // WHERE content_posts.user_id = 2
    // ORDER BY created DESC;

    //2
    // SELECT users.username as following_user, image_video_url, description, created 
    // FROM content_posts
    // JOIN users ON content_posts.user_id = users.id
    // JOIN followers ON followers.user_id = users.id 
    // WHERE followers.follower_user_id = 2 AND content_posts.user_id = 2
    // ORDER BY created DESC;

    // SELECT users.username, f.user_id, f2.follower_user_id, count(DISTINCT content_posts.id) as post FROM users
    // JOIN followers f ON f.follower_user_id = users.id
    // JOIN followers f2 ON f2.user_id = users.id
    // JOIN content_posts on content_posts.user_id = users.id
    // WHERE users.id = 2
    // GROUP BY users.username;


    const queryString = `
    SELECT users.username as username, image_video_url, description, created 
    FROM content_posts
    JOIN users ON content_posts.user_id = users.id
    WHERE content_posts.user_id = 1
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

