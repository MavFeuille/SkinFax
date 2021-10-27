const express = require('express');
const router = express.Router();
const cloudinaryWithConfig = require('../cloudinary_config');

// function that will contain all the get routes
const routers = function (pool) {

  // router.post('/upload', async (req, res) => {
  //   try {
  //     const fileString = req.body.data;
  //     // console.log("🚀 ~ file: upload.js ~ line 10 ~ fileString", fileString);
  //     const uploadResponse = await cloudinaryWithConfig.uploader.upload(
  //       fileString, {
  //       upload_preset: "skinfax_setup"
  //     })
  //     console.log("🚀 ~ file: upload.js ~ line 33 ~ uploadResponse", uploadResponse)
  //     res.json({message: "SEEMS OK!"});
  //   } catch (error) {
  //     res.status(500).json({errror: "Something's wrong..."});
  //   }
    
  //   return res.redirect('./create_post');
  // });

  // only return router
  return router;
}

// only export the function
module.exports = routers;


      
