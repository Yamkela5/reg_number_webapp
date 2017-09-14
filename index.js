var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var exphbs  = require('express-handlebars');
var mongoStore = require('./models')
var regNumbers = mongoStore();
var mongoose = require('mongoose')
app.use(express.static('public'));
//empty array that I will push reg numbers to
var regNumberList=[];
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/RegNumbr');
 var db = mongoose.connection;
 //throw err

 db.on('error', console.error.bind(console, 'connection error:'));

//create a get router that take a Registration number

app.get('/',function(req, res){
  var name = req.body.name;
  res.render('index')
})

app.post('/reg_number',function(req, res){

var name = req.body.name;

regNumberList.push(name)
mongoStore.create({name: name}, function(err, result){
    if (err) {return (err)}

    console.log(result);
});

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
