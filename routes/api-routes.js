// Requiring our models and passport as we've configured it
var db = require("../models");

// Route for getting some data about our user to be used client side
app.get("/", function (req, res) {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/api/workout_modify", function (req, res) {

  db[req.body.workout.update({
    exercise:req.body.exercise
  }, {
    where: {
      id: req.body.id
    }
  }).then(update => {
    res.send("this worked well")
  }),


app.post("/api/workout_add", function (req, res) {

  db[req.body.day].create({
    exercise:req.body.exercise
  }, {
    where: {
      id: req.body.id
    }
  }).then(create => {
    res.send("this worked tooooooooo well")
  })

})