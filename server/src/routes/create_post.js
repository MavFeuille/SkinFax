const express = require('express');
const router = express.Router();
const cloudinaryWithConfig = require('../cloudinary_config');

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

  router.post('/create_post', async (req, res) => {
    const queryString = `
    INSERT INTO content_posts (user_id, image_video_url, description)
    VALUES  
    ($1, $2, $3)
    RETURNING *;
    `
    try {
      const fileString = req.body.data;
      // console.log("🚀 ~ file: upload.js ~ line 10 ~ fileString", fileString);
      const uploadResponse = await cloudinaryWithConfig.uploader.upload(
        fileString, {
        upload_preset: "skinfax_setup"
      })
      pool.query(queryString,[2, uploadResponse.secure_url, req.body.text])
      .then((data) => {
        res.json(data.rows);
      })
      .catch(err => {
        console.log('error:', err.message);
      });

      console.log("🚀 ~ file: upload.js ~ line 33 ~ uploadResponse", uploadResponse)
      // res.json({message: "SEEMS OK!"}).send();
    } catch (error) {
      console.log("ERROR fROM line 34 -- ", error)
      res.status(500).json({errror: "Something's wrong..."});
    }
    
  });

  

  // only return router
  return router;
}

// only export the function
module.exports = routers;

