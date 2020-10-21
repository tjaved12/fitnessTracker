// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");
// var db = require("../models");

// module.exports = function (app) {

//   app.get("/all", (req, res) => {
//     db.workouts.find({}, (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.json(data);
//       }
//     });
//   });

  app.get("/", (req, res) => {
    db.workouts.find({})
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        res.json(err);
      });
  });