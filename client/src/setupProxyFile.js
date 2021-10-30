//to stop proxy erroring out and make req to it work
const proxy = require("http-proxy-middleware");
module.exports = function(app){
  app.use(proxy("/socket.io/", 
  {target: "http://localhost:8000/", ws: true}))
}