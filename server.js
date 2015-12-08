var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
var port = 8000;

var ListingCtrl = require('./Server-Assets/Controllers/ListingCtrl');

//----------Fluff------------//
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/public'));
app.listen(port, function () {
  console.log("Listening on port: " + port);
});

//-----------Connection to database-----------//
mongoose.connect('mongodb://localhost/simplre')
mongoose.connection.once('connected', function() {
  console.log('connected to db');
})

//-----------Listing Endpoints-----------//
app.get('/api/inventory/listings', ListingCtrl.read);
app.post('/api/inventory/listings', ListingCtrl.create);
app.put('/api/inventory/listings', ListingCtrl.update);
app.delete('/api/inventory/listings', ListingCtrl.delete);

app.get('/api/inventory/buyers', BuyerCtrl.read);
app.post('/api/inventory/buyers', BuyerCtrl.create);
app.put('/api/inventory/buyers', BuyerCtrl.update);
app.delete('/api/inventory/buyers', BuyerCtrl.delete);

app.get('/api/user', UserCtrl.read);
app.post('/api/user', UserCtrl.create);
app.put('/api/user', UserCtrl.update);
app.delete('/api/user', UserCtrl.delete);
