var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
  res.send("gets all the promotions!");
});


router.get('/:id', function (req, res) {
  res.send("gets a promotion! with id " + req.params.id);
});


router.put('/:id', function(req, res){
  	res.write("updating promotion with id" + req.params.id);
    res.end("promotion has name " + req.body.name + " and desc " + req.body.desc);
});

router.post('/', function(req, res){
    res.end("will add promotion with name " + req.body.name + " and desc " + req.body.desc);
});

router.delete('/:id', function(req, res){
  res.end("deleting promotion with id " + req.params.id);
});

router.delete('/', function(req, res){
  res.end("deleting promotion all dishes!!");
});

module.exports = router
