var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
  name: String,
  facebook: {
    id: String,
    token: String,
    name: String,
    email: String,
  },


  listingContract: {type: mongoose.Schema.Types.ObjectId, ref: 'ListingContract'},
  purchaseContract: {type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseContract'},


}, {collection: 'Teams'} );

module.exports = mongoose.model('Team', TeamSchema);
