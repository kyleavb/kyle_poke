var express = require("express");
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  console.log("root call");
  res.render("index");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.listen(5000);
console.log("Listening port: 5000");
