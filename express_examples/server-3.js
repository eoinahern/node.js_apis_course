
var express = require("express");
var http = require("http");
var morgan = require("morgan");
var bodyparser = require("body-parser");



var hostname = "localhost";
var port = 3000;


var app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());


app.all('/dishes', function(req, res, next){
  res.writeHead(200, {"Content-Type":"text/plain"});
  next();
});

app.get('/dishes', function(req, res, next){
  res.end("will send all dishes to you!!!");
});

app.post('/dishes', function(req, res, next){
  res.end("will add a dish " + req.body.name + " desc: " +
  req.body.description);

});

app.get('/dishes/:dishesid', function(req, res, next){
  res.end("will get single dish with id " + req.params.dishesid);
});

app.put('/dishes/:dishedid', function(req, res, next){
  res.write("will update dish with id " + req.params.dishid);
  res.end("req id:"  + req.body.name);

});

app.delete('/dishes', function(req, res, next){
    res.end("delete all dishes");

});



app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log("server is running!!");

});
