var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  facebook: {
    id: String,
    token: String,
    name: String,
  },

  listingContract: {type: mongoose.Schema.Types.ObjectId, ref: 'ListingContract'},
  purchaseContract: {type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseContract'},


}, {collection: 'Users'} );

module.exports = mongoose.model('User', UserSchema);
