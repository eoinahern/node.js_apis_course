var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.send("gets all the dishes! because im hungry!");
});


router.get('/:id', function (req, res) {
  res.send("gets a dish! with id " + req.params.id);
});


router.put('/', function(req, res){

});

router.post('/', function(req, res){

});

router.delete('/:dishid', function(req, res){

});


module.exports = router
