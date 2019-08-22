var express = require('express');
var router = express.Router();
var request = require("request");
var path = require('path');

///// Route to Landing Page \\\\\
router.get('/', function (req, res) {
  // res.render('portfolio2');
  res.render('portfolio3');
});
router.get('/3', function (req, res) {
  res.render('portfolio3');
});

/*
router.get('/tech', function (req, res) {
  res.render('index');
});

router.get('/portfolio', function (req, res) {
  res.render('portfolio');
});
*/


module.exports = router;