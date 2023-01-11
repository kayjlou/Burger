var express = require("express");
var app = express.Router();
var burger = require("../models/burger.js");

app.get("/", (req, res) => {
  burger.show((data)=> {
    console.log(data);
    res.render("index", { burger: data });
  });
});

app.post("/", (req, res) => {
  burger.add(req.body.burger_name, () => {
    return res.redirect("/");
  });
});

app.put("/", (req, res) => {
  burger.update(req.body.id, function() {
    return res.redirect("/");
  });
});

module.exports = app;
