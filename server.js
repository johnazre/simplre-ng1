var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
var port = 8000;

//----------Fluff------------//
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/public'));
app.listen(port, function () {
  console.log("Listening on port: " + port);
});

//-----------Connection to database-----------//
mongoose.connect('mongodb://localhost/productsAppData')
