var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  name: String,
  facebook: {
    id: String,
    token: String,
    name: String,
    email: String,
  },
  username: String,
  password: String,
  //
  // listingContract: {type: mongoose.Schema.Types.ObjectId, ref: 'ListingContract'},
  // purchaseContract: {type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseContract'},
  //

}, {collection: 'Users'} );

//
// UserSchema.pre('save', function () {
//   var user = this;
//   bcrypt.genSalt(12, function (err, salt) {
//     bcrypt.hash(this.password, salt, function(err, hash){
//       user.password = hash;
//       next();
//     })
//   })
// })

module.exports = mongoose.model('User', UserSchema);
