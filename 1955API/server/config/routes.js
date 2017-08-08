var apiController = require("../controllers/1955.js");
module.exports = function(app) {
    app.get("/", apiController.getAll)
    app.get("/new/:name", apiController.createPerson)
    app.get("/remove/:name", apiController.deletePerson)
    app.get("/:name", apiController.getPerson)
}
