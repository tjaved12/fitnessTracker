// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
  
    res.json("index.html");
  });

}