var express = require("express");
var exphbs = require("express-handlebars");
var orm = require("./config/orm.js");

var app = express();
var PORT = process.env.PORT || 3000;


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var orm = require("./config/orm.js");

orm.selectAll("burgers");
// orm.selectWhere("burgers","burger_name", "Nick Cage Burger");


app.listen(PORT);