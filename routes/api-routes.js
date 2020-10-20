// Requiring our models and passport as we've configured it
var db = require("../models");

  // Route for getting some data about our user to be used client side
  app.get("/api/workout", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
       
      });
    }
  });
  
  // Route for getting some data about our user to be used client side
  app.get("/api/workout", function(req, res) {
  
db.Day1.findAll({}).then(function (data) {
    // console.log('Plan',data);
  res.json(data)
});

    }
  );
  
      
                app.put("/api/workout_modify", function(req,res){
                 
                  db[req.body.day].update({
                    dinner: req.body.dinner,
                    breakfast: req.body.breakfast,
                    lunch: req.body.lunch,
                    amsnack: req.body.amsnack,
                    pmsnack: req.body.pmsnack
                  }, {
                    where: {
                      id: req.body.id
                    }
                  }).then(update => { 
                    res.send("this worked well")
                  })
                  // console.log(req.body, "Body")
                })


                app.post("/api/workout_add", function(req,res){
                 
                  db[req.body.day].create({
                    dinner: req.body.dinner,
                    breakfast: req.body.breakfast,
                    lunch: req.body.lunch,
                    amsnack: req.body.amsnack,
                    pmsnack: req.body.pmsnack
                  }, {
                    where: {
                      id: req.body.id
                    }
                  }).then(create => { 
                    res.send("this worked tooooooooo well")
                  })
                 
                })
