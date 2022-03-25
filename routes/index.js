var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'avani'
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
 
});
router.post('/process', function(req, res, next) {
  var a=req.body.nm;
  var b=req.body.age;
  connection.query("insert into student (sname,sage)values(?,?)",[a,b],function(err){
    res.send("Recode Added");
  });
 // console.log(`name is ${a} and age is ${b}`);
  //res.render('ans',{mya:a,myb:b});//ans is the file and mya is kay and a is tha value
});
module.exports = router;
