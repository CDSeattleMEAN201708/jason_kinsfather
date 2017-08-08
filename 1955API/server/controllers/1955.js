var mongoose = require("mongoose");
var Person = mongoose.model("Person");

module.exports = {
    getAll: (req, res) => {
        console.log("looking for the people!");
        Person.find({}, (err, people) => {
            if (err) {
                console.log(err + "!!!!!!!!!");
            }
            res.json(people);
        })
    },
    createPerson: (req, res) => {
        let name = req.params.name;
        let newPerson = new Person();
        newPerson.name = name;
        newPerson.save().then(
            res.redirect("/")
        )
    },
    deletePerson: (req, res) => {
        Person.find({"name": req.params.name}, (err, people) => {
            let personToDelete = people[0];
            if (personToDelete !== []) {
                personToDelete.remove();
            }
            res.redirect("/");
        });
    },
    getPerson: (req, res) => {
        Person.find({"name": req.params.name}, (err, people) => {
            if (people.length > 0) {
                res.json(people[0]);
            } else {
                res.json({"Error": "No Person Found Named " + req.params.name});
            }
        });
    }
}
