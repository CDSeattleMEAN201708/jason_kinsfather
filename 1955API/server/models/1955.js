//Require Mongoose
var mongoose = require("mongoose");
//Create a new Schema
var PersonSchema = new mongoose.Schema({
    name: String
})
//Register the Schema as a model
var Person = mongoose.model("Person", PersonSchema);
