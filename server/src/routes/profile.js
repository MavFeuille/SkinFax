const express = require('express');
const router = express.Router();

// function that will contain all the get routes
const routers = function (pool) {

  router.get('/profile', function (req, res, next) {

    const queryString = `
    SELECT users.username, users.profile_picture_url, count(DISTINCT f.user_id) as following, count(DISTINCT f2.follower_user_id) as follower, count(DISTINCT content_posts.id) as posts FROM users
    JOIN followers f ON f.follower_user_id = users.id
    JOIN followers f2 ON f2.user_id = users.id
    JOIN content_posts on content_posts.user_id = users.id
    WHERE users.id = 2
    GROUP BY users.username, users.profile_picture_url;`


    return pool.query(queryString)
      .then((data) => {
        const profile = data.rows[0];

        if (profile) {
          return res.json(profile)
        }
        return res.status(404).send("Profile not found")

      })
      .catch(err => {
        console.log('error:', err.message);
        return next(err)
      })
  });

  router.get('/profile/posts', function (req, res, next) {

    const queryString = `
    SELECT image_video_url, description, created  FROM content_posts
    WHERE user_id = 1;`


    return pool.query(queryString)
      .then((data) => {
        const posts = data.rows;
        return res.json(posts);
      })
      .catch(err => {
        console.log('error:', err.message);
        return next(err)
      })

  });
  //only return router
  return router;
}

// only export the function
module.exports = routers;

//know which user is being retrieved, u can get profil + results /users seperately. also $1 etc

