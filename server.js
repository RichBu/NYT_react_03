const express = require("express");
var morgan = require('morgan');

const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
const mongojs = require("mongojs");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Configuring body parser for AJAX request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serving up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
};

//allow the api to be accessed by other apps
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.use(morgan('dev'));

// Add routes, both API and view
app.use(routes);


//Set up mongdo db
databaseUrl = process.env.MONGODB_URI || 'nytreact03';
collections = ['articles'];
db = mongojs(databaseUrl, collections);

db.on('error', function (error) {
  console.log('Database Error:', error);
});

/*
db.articles.insert({
  title: "test1",
  date: "04/01/2018",
  url: "www.google.com"
}, function (error, savedArticle) {
  res.json(savedArticle);
});
*/


app.listen(PORT, function () {
  console.log(`Server up on PORT ${PORT}`)
});


