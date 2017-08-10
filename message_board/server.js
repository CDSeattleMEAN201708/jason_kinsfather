var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")

app.use(express.static(path.join(__dirname, "./static")))
app.use(bodyParser.urlencoded({extended:true}))

app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs")

var mongoose = require("mongoose")
mongoose.Promise = global.Promise

var PostSchema = new mongoose.Schema({
    text: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: "Post"},
    text: {type: String, required: true}
}, {timestamps: true});


mongoose.model("Post", PostSchema)
mongoose.model("Comment", CommentSchema)

var Post = mongoose.model("Post")
var Comment = mongoose.model("Comment")

app.get("/", (req, res) => {
    res.render("index");
})
