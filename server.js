//jshint esversion:6
// i forgot  to set up the server. whoops.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){

var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);

var bmi = (weight / (height * height) * 703);
res.send("Your BMI is " + bmi);

})

app.listen(3000, function(){
    console.log("server working");
});