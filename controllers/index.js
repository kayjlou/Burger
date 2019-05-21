var express = require("express");
var app = express.Router();
var burger = require("../models/burger.js");

app.get("/", function(req, res) {
  burger.show(function(data) {
    console.log(data);
    res.render("index", { burger: data });
  });
});

app.post("/", function(req, res) {
  burger.add(req.body.burger_name, function() {
    return res.redirect("/");
  });
});

app.put("/", function(req, res) {
  burger.update(req.body.id, function() {
    return res.redirect("/");
  });
});

module.exports = router;
