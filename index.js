var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var exphbs  = require('express-handlebars');
var mongoStore = require('./models')
var RegNumber = mongoStore;
console.log(RegNumber);
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/', function(req, res) {


    res.render('index');

})


app.get('/reg_number', function(req, res){

  var regNumberList = req.body.name;



  RegNumber.find({}, function(err, results){

    if(err){

      console.log(err);

    }

    else{

      console.log(results);

      res.render('index', {listReg: results})

    }

  })

})


app.post('/reg_number', function(req, res) {

  var regList = [];

  var regNumberList = req.body.name;
  var town = req.body.regNum;
  var numbers = ' ';
  regObj= {};


  var add = {

    RegNumber: regNumberList

  };


  RegNumber.findOne({

    RegNumber: regNumberList

  }, function(err, results) {

    if (err) {

      console.log(err);

      return

    }


    if (results) {

      regList.push(regNumberList)
      regObj[regNumberList] = 1

    } else {

      RegNumber.create(add);


    }



  })

    res.redirect("/reg_number")


});



app.post('/filter-towns', function(req, res) {

      var town = req.body.regNum;

 


if (town === 'All'){

  res.redirect('/reg_number');

}

else{

RegNumber.find({
  RegNumber: {

            '$regex': town + '.*'

          }

          },

          function(err, results) {

            if (err) {

              console.log(err);

            } else {

              console.log(results);

              res.render('index', {

                output: results

              })

            }

          })


        }

      });







// start the server
var port = process.env.PORT || 3001
var server = app.listen(port, function() {
  console.log("Web app started on port : " + port)
});
