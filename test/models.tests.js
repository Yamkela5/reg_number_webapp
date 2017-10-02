// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser')
// var exphbs  = require('express-handlebars');
// var mongoStore = require('./models')
// var regNumbers = mongoStore();
// var mongoose = require('mongoose')
// app.use(express.static('public'));
// //empty array that I will push reg numbers to
// var regNumberList=[];
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(bodyParser.json())
//
// mongoose.connect('mongodb://localhost/RegNumbr');
//  var db = mongoose.connection;
//  //throw err
//
//  db.on('error', console.error.bind(console, 'connection error:'));
//
// //create a get router that take a Registration number
//
// app.get('/',function(req, res){
//   var name = req.body.name;
//   res.render('index')
// })
//
// app.post('/reg_number',function(req, res){
//
// var name = req.body.name;
//
// regNumberList.push(name)
// mongoStore.create({name: name}, function(err, result){
//     if (err) {return (err)}
//
//     console.log(result);
// });
//
// res.render('index',{
//     numplate: regNumberList
//
//   })
//   app.get('/', function(req, res) {
//
//
//       res.render('index');
//
//   })
//
//
//   app.get('/reg_numbers', function(req, res){
//
//     var regNumbers = req.body.name;
//
//
//
//     plateNumber.find({}, function(err, results){
//
//       if(err){
//
//         console.log(err);
//
//       }
//
//       else{
//
//         console.log(results);
//
//         res.render('index', {listReg: results})
//
//       }
//
//     })
//
//   })
//
//
//   app.post('/reg_numbers', function(req, res) {
//
//     var regList = [];
//
//     var regObj = {}
//
//
//     var regNumbers = req.body.name;
//
//     var area = req.body.regNum;
//
//     var string = ' ';
//
//
//
//
//     var newRegNumber = {
//
//       plateNumber: regNumbers
//
//     };
//
//
//     plateNumber.findOne({
//
//       plateNumber: regNumbers
//
//     }, function(err, results) {
//
//       if (err) {
//
//         console.log(err);
//
//         return
//
//       }
//
//
//       if (results) {
//
//         //console.log(results);
//
//
//         regList.push(regNumbers)
//
//         regObj[regNumbers] = 1
//
//
//       } else {
//
//         plateNumber.create(newRegNumber);
//
//
//       }
//
//
//
//     })
//
//       res.redirect("/reg_numbers")
//
//
//   });
//
//
//
//   app.post('/selected_town', function(req, res) {
//
//         var area = req.body.regNum;
//
//     // console.log(area);
//
//
//   if (area === 'All'){
//
//     res.redirect('/reg_numbers');
//
//   }
//
//   else{
//
//
//         plateNumber.find({
//
//             plateNumber: {
//
//               '$regex': area + '.*'
//
//             }
//
//             },
//
//             function(err, results) {
//
//               if (err) {
//
//                 console.log(err);
//
//               } else {
//
//                 console.log(results);
//
//                 res.render('index', {
//
//     output: results
//
//                 })
//
//               }
//
//             })
//
//
//           }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //start the server
// var server = app.listen(3001, function () {
//
//  var host = server.address().address;
//  var port = server.address().port;
//
//  console.log('Registration web app listening at http://%s:%s', host, port);
//
// })
