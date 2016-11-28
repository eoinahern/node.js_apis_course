var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.send("gets all the leaders!");
});


router.get('/:id', function (req, res) {
  res.send("gets a leader! with id " + req.params.id);
});


router.put('/:id', function(req, res){
  	res.write("updating leader with id" + req.params.id);
    res.end("leader has name " + req.body.name + " and desc " + req.body.desc);
});

router.post('/', function(req, res){
    res.end("will add leader with name " + req.body.name + " and desc " + req.body.desc);
});

router.delete('/:id', function(req, res){
  res.end("deleting leader with id " + req.params.id);
});

router.delete('/', function(req, res){
  res.end("deleting all leaders!!");
});

module.exports = router
