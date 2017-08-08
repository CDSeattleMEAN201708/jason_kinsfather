var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

//Connect to mongod server and either connect or create new database
mongoose.connect("mongodb://localhost/1955_db", {"useMongoClient": true});
//Store path to model files
var models_path = path.join(__dirname, "./../models");

//read all of the files in the models_path and run each javascript file
fs.readdirSync(models_path).forEach( file => {
    if (file.indexOf(".js") >= 0) {
        //This runs the model file, registering the schema with the database
        require(models_path + "/" + file);
    }
})
