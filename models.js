var mongoose = require('mongoose');
const MongoURL =process.env.MONGO_DB_URL || "mongodb://localhost/RegNumbr";
mongoose.connect(MongoURL, {
  useMongoClient: true
});
//yash

console.log("Connecting to MongoURL : " + MongoURL);

const regNumbers = mongoose.Schema({

  name: String
 });

var regNumber = mongoose.model("regNumber", regNumbers);

module.exports = regNumber; 
