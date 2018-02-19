var express = require("express");
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var db = require("./models");

var user = null;

var app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  console.log("root call");
  res.render("index", {user: user});
});

app.get("/profile", function(req, res){
  res.render("profile", {user: user});
});

app.get("/login", function(req, res){
  res.render("login", {user, user});
});
app.post("/login", function(req, res){

  console.log("Login Post Route..");
});

app.listen(5000);
console.log("Listening port: 5000");
