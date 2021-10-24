const express = require('express');
const router = express.Router();

const testRoute = function (pool) {

  router.get('/', function (req, res) {

    pool.query('SELECT * FROM users')
      .then((data) => {
        res.json(data.rows)
      });
    // console.log("GET /")
    // res.json({
    //   name: "sam",
    //   age: 25
    // })
  });

  return router;

}
module.exports = testRoute;