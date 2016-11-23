var dishes = require("./dishes");
var promotions = require("./promotions");
var leadership = require("./leadership");
var express = require("express");
var morgan = require("morgan");
var bodyparser = require("body-parser");

//setup!!
var app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());


var hostname = "localhost";
var port = 3000;

app.use('/dishes', dishes);
//app.use('/leadership', leadership);
//app.use('/promotions', promotions);

app.listen(port, hostname, function(){
  console.log("server is running!!");
});
