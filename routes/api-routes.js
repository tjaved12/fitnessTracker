// Requiring our models and passport as we've configured it
var db = require("../models");


// Route for getting some data about our user to be used client side
module.exports= function(app){

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
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


app.post("/api/workouts",(req, res) => {
    db.Workout.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $set: {
          type: req.body.type,
          name: req.body.name,
          modified: Date.now()
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  
  // db.Workout.find({}).then(data => {
  //   method: "POST";
  //     headers: { "Content-Type"; "application/json" };
  //     body: JSON.stringify(data)
  //   });

 
}
// app.put("/api/workout_modify", function (req, res) {

//   db[req.body.workout.update({
//     exercise:req.body.exercise
//   }, {
//     where: {
//       id: req.body.id
//     }
//   }).then(update => {
//     res.send("this worked well")
//   }),


// app.post("/api/workout_add", function (req, res) {

//   db[req.body.day].create({
//     exercise:req.body.exercise
//   }, {
//     where: {
//       id: req.body.id
//     }
//   }).then(create => {
//     res.send("this worked tooooooooo well")
//   })

// })
//   ]