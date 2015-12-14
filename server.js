var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var secret = require("./secret");

var app = express();
var port = 8000;

//-----------Importing Controllers-----------//
var ListingCtrl = require('./Server-Assets/Controllers/ListingCtrl');
var PurchaseCtrl = require('./Server-Assets/Controllers/PurchaseCtrl');
var ClientCtrl = require('./Server-Assets/Controllers/ClientCtrl');
var UserCtrl = require('./Server-Assets/Controllers/UserCtrl');
var User = require('./Server-Assets/Models/User')

//----------Fluff------------//
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));
app.listen(port, function () {
  console.log("Listening on port: " + port);
});

//-----------Connection to database-----------//
mongoose.connect('mongodb://localhost/simplre')
mongoose.connection.once('connected', function() {
  console.log('connected to db');
})

//-----------Passport Facebook Authentication-----------//
app.use(session({
    secret: secret.session,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: secret.fb.clientID,
    clientSecret: secret.fb.clientSecret,
    callbackURL: "http://localhost:"+port+"/api/auth/callback",
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
    },  function(accessToken, refreshToken, profile, done) {
  	    	process.nextTick(function(){
  	    		User.findOne({'facebook.id': profile.id}, function(err, user){
  	    			if(err)
  	    				return done(err);
  	    			if(user)
  	    				return done(null, user);
  	    			else {
  	    				var newUser = new User();
  	    				newUser.facebook.id = profile.id;
  	    				newUser.facebook.token = accessToken;
  	    				newUser.facebook.name = profile._json.first_name + " " + profile._json.last_name;
                newUser.facebook.email = profile._json.email;

  	    				newUser.save(function(err){
  	    					if(err)
  	    						throw err;
  	    					return done(null, newUser);
  	    				})
  	    				console.log(profile);
  	    			}
  	    		});
  	    	});
  	    }

));

app.get("/api/auth/", passport.authenticate("facebook"));
app.get("/api/auth/callback", passport.authenticate("facebook", {
    successRedirect: "/#/home",
    failureRedirect: "/#/login"
}));

passport.serializeUser(function(user, done){
    done(null, user);
});
passport.deserializeUser(function(obj, done){
    done(null, obj);
});

app.get("/me", function(req, res){
    res.json(req.user);
});

app.get('/logout',function(req, res) {
  req.logout();
  res.redirect('/#/login');
})

//-----------Client Endpoints-----------//
app.get('/api/client', ClientCtrl.read);
app.get('/api/client/:id', ClientCtrl.readOne);
app.post('/api/client', ClientCtrl.create);
app.put('/api/client', ClientCtrl.update);
app.delete('/api/client', ClientCtrl.delete);

//-----------Listing Contract Endpoints-----------//
app.get('/api/listing', ListingCtrl.read);
app.get('/api/listing/:id', ListingCtrl.readOne);
app.post('/api/listing', ListingCtrl.create);
app.put('/api/listing', ListingCtrl.update);
app.delete('/api/listing', ListingCtrl.delete);

//-----------Purchase Contract Endpoints-----------//
app.get('/api/purchase', PurchaseCtrl.read);
app.get('/api/purchase/:id', PurchaseCtrl.readOne);
app.post('/api/purchase', PurchaseCtrl.create);
app.put('/api/purchase', PurchaseCtrl.update);
app.delete('/api/purchase', PurchaseCtrl.delete);

//-----------User Endpoints-----------//
app.get('/api/user', UserCtrl.read);
app.get('/api/user/:id', UserCtrl.readOne);
// app.post('/api/user', UserCtrl.create);
app.put('/api/user', UserCtrl.update);
app.delete('/api/user', UserCtrl.delete);
