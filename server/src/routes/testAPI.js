const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  console.log("GET /")
  res.json({
    name: "sam",
    age: 25
  })
});

module.exports = router;