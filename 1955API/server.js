const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const HOST = 7998

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./static"));
app.set("view engine", "ejs");

require("./server/config/mongoose.js");
var routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(HOST, function() {
    console.log("listening on port " + HOST);
})
