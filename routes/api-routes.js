// Requiring our models and passport as we've configured it
var db = require("../models");
const path = require("path");

// Route for getting some data about our user to be used client side
module.exports= function(app){

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"));
  });
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/stats.html"));
  });
 
  
app.get("/all", function (req, res) {
 db. Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  
});
app.get("/api/workouts", function(req,res){
db.Workout.find({}).then(data => {
  res.json(data);
})
.catch(err => {
  res.json(err);
});
});

app.get("/api/workouts/range", function(req,res){
  db.Workout.find({}).then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
  });
  

app.put("/api/workouts/:id",(req, res) => {
   
  var condition = "id = " + req.params.id;
  console.log("condition", condition)
  db.Workout.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
 
  

}

  
  