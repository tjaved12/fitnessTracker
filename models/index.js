const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const indexSchema = new Schema({
  day:{
    type:Date
  },
  workout: [
    {
    type: String,
    id: Number
  
  },
  ]
})
 


const Index = mongoose.model("Index", indexSchema);

module.exports = Index;
