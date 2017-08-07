var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise

var QuoteSchema = new mongoose.Schema({
    quote : String,
    name : String,
}, {timestamps: {createdAt: "created_at"}})
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");
mongoose.connect("mongodb://localhost/quote_app")

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/addQuote", (req, res) => {
    console.log(req.body);
    if (req.body.submit === "Add my Quote") {
        var quote = Quote({quote: req.body.quote, name: req.body.name});
        quote.save( err => {
            if (err) {
                console.log("Error: " + err);
            } else {
                console.log("successfully add a user!")
            }
        })
    }
    res.redirect("/quotes");
})

app.get("/quotes", (req, res) => {
    Quote.find({}, (err, users) => {
        res.render("quotes", {users : users});
    })
})
app.listen(7999, () => {
    console.log("listening on Port 7999");
})
