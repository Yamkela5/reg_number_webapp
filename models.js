var mongoose = require('mongoose');

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/regNumber";
mongoose.connect(mongoURL, function(err) {
  if (err) {
    console.log('Error Connecting to DB: ' + err);
  } else {
    console.log('connection to DB is successful');
  }
});

var RegNumber = mongoose.model('RegNumber', {
  RegNumber: String

});

module.exports = RegNumber;
