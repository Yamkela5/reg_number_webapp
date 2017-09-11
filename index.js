var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var exphbs  = require('express-handlebars');
app.use(express.static('public'));
//empty array that I will push reg numbers to
var regNumberList=[];
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

//create a get router that take a Registration number

app.get('/',function(req, res){
  var name = req.body.name;
  res.render('index')
})

app.post('/reg_number',function(req, res){

var name = req.body.name;

regNumberList.push(name)

  res.render('index',{
    numplate: regNumberList

  })
})




















//start the server
var server = app.listen(3001, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Registration web app listening at http://%s:%s', host, port);

});
