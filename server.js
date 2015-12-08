var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
var port = 8000;

var ListingCtrl = require('./Server-Assets/Controllers/ListingCtrl');
var PurchaseCtrl = require('./Server-Assets/Controllers/PurchaseCtrl');
var ClientCtrl = require('./Server-Assets/Controllers/ClientCtrl');

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
app.get('/api/listings', ListingCtrl.read);
app.post('/api/listings', ListingCtrl.create);
app.put('/api/listings', ListingCtrl.update);
app.delete('/api/listings', ListingCtrl.delete);

app.get('/api/buyers', PurchaseCtrl.read);
app.post('/api/buyers', PurchaseCtrl.create);
app.put('/api/buyers', PurchaseCtrl.update);
app.delete('/api/buyers', PurchaseCtrl.delete);

app.get('/api/client', ClientCtrl.read);
app.post('/api/client', ClientCtrl.create);
app.put('/api/client', ClientCtrl.update);
app.delete('/api/client', ClientCtrl.delete);
