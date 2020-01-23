var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/findbranches', function(req, res, next) {
  res.render('findbranches');
});

router.get('/user', function(req, res, next) {
	res.render('user');
  });

router.get('/admin', function(req, res, next) {
	res.render('admin');
});

router.get('/editbranch', function(req, res, next) {
	res.render('editbranch');
});

router.get('/template', function(req, res, next) {
  res.render('template', { title: 'Express' });
});

router.get('/editpage', function(req, res, next) {
  res.render('editpage', { title: 'Express' });
});

module.exports = router;
