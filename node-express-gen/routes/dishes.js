var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.send("gets all the dishes! because im hungry!");
});


router.get('/:id', function (req, res) {
  res.send("gets a dish! with id " + req.params.id);
});


router.put('/:id', function(req, res){
  	res.write("updating dish with id" + req.params.id);
    res.end("dish has name " + req.body.name + " and desc " + req.body.desc);
});

router.post('/', function(req, res){
    res.end("will add dish with name " + req.body.name + " and desc " + req.body.desc);
});

router.delete('/:id', function(req, res){
  res.end("deleting dish with id " + req.params.id);
});

router.delete('/', function(req, res){
  res.end("deleting dish all dishes!!");
});

module.exports = router
