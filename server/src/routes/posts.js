const express = require('express');
const router = express.Router();
const cloudinaryWithConfig = require('../cloudinary_config');

// function that will contain all the get routes
const routers = function (pool) {

  // grabbing all users posts (mix user's own posts and user's following posts)
  router.get('/', function (req, res) {

    const queryString = `
      SELECT count(likes.id) as likes, users.id as user_id, users.username as username, users.profile_picture_url, image_video_url, description, created, content_posts.id as content_post_id, content_posts.user_id 
      FROM content_posts
      JOIN users ON content_posts.user_id = users.id
      LEFT JOIN likes ON likes.content_post_id = content_posts.id 
      GROUP BY users.id, users.username, image_video_url, description, created, content_posts.id
      ORDER BY created DESC;`

    pool.query(queryString)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  // grabbing all users posts (mix user's own posts and user's following posts)
  router.get('/:post_id/comments', function (req, res) {

    const queryString = `
    SELECT users.profile_picture_url, users.username as username, comments.comment, comments.created, comments.id, comments.user_id, comments.content_post_id FROM users
    JOIN comments ON comments.user_id = users.id
    JOIN content_posts ON comments.content_post_id = content_posts.id
    WHERE comments.content_post_id = $1
    ORDER BY created DESC;`

    pool.query(queryString, [req.params.post_id])
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });


  // only getting logged in user's post
  router.get('/users/:id', function (req, res) {

    const queryString = `
    SELECT count(likes.id) as likes, users.id , users.username as username, users.profile_picture_url, image_video_url, description, created, content_posts.id as content_post_id, content_posts.user_id 
    FROM content_posts
    JOIN users ON content_posts.user_id = users.id
    LEFT JOIN likes ON likes.content_post_id = content_posts.id 
    WHERE content_posts.user_id = $1
    GROUP BY users.id, users.username, image_video_url, description, created, content_posts.id
    ORDER BY created DESC;`

    pool.query(queryString, [req.params.id])
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  // get all following's posts
  router.get('/follow/:id', function (req, res) {
    const queryString = `
    SELECT users.id, users.username as username, users.profile_picture_url, image_video_url, description, created, content_posts.id as content_post_id FROM content_posts
    JOIN users ON content_posts.user_id = users.id
    JOIN followers ON followers.user_id = users.id 
    WHERE followers.follower_user_id = $1
    ORDER BY created DESC;`

    pool.query(queryString, [req.params.id])
      .then((data) => {
        res.json(data.rows)
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

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

  // Create new post
  router.post('/create_post', async (req, res) => {
    console.log("???? ~ file: posts.js ~ line 82 ~ router.post ~ req.body", req.body)
    const queryString = `
    INSERT INTO content_posts (user_id, image_video_url, description)
    VALUES  
    ($1, $2, $3)
    RETURNING *;`
    try {
      const fileString = req.body.data;
      // console.log("???? ~ file: upload.js ~ line 10 ~ fileString", fileString);
      const uploadResponse = await cloudinaryWithConfig.uploader.upload(
        fileString, {
        upload_preset: "skinfax_setup"
      })


      pool.query(queryString, [1, uploadResponse.secure_url, req.body.text])
        .then((data) => {
          res.json(data.rows);
        })
        .catch(err => {
          console.log('error:', err.message);
        });

      console.log("???? ~ file: upload.js ~ line 33 ~ uploadResponse", uploadResponse)

    } catch (error) {
      console.log("ERROR fROM line 34 -- ", error)
      res.status(500).json({ errror: "Something's wrong..." });
    }

  });

  router.delete("/:id", (req, res) => {
    console.log("delete", req.params.id)
    const queryString = `
    DELETE FROM content_posts
    WHERE content_posts.id = $1;`;

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