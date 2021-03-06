// Requiring our models and passport as we've configured it
var db = require("../models");
const path = require("path");
const { Workout } = require("../models");

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
  
  app.post("/api/workouts", function(req,res){
    db.Workout.create({}).then(data=>{
      console.log("data", data)
      res.json(data)
    })
    .catch(err => {
      res.json(err);
    });
  })

app.put("/api/workouts/:id",(req, res) => {

  Workout.findOneAndUpdate(
    { _id: req.params.id }, 
    { $push: { exercises: req.body  } },

  )

.then(data=>{
    console.log("data", data)
    res.json(data)
  })
  .catch(err => {
    res.json(err);
  });

   
 
});
 
  

}

  
  