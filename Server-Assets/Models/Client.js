var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  type: {
    type: String,
    enum:[
      'Seller',
      'Buyer',
    ],
    required: true,
  },
  buyerStatus: {
    type: String,
    enum:[
      'Pre-Approved/Pre-Qualified',
      'Searching',
      'Under Contract',
      'Closed',
      'Cancelled'
    ]
  },
  sellerStatus: {
    type: String,
    enum:[
      'Undecided',
      'Interested',
      'Currently listing',
      'Closed',
      'Cancelled'
    ]
  },
  source: {
    type: String,
    required: true
  },
  listingContract: {type: mongoose.Schema.Types.ObjectId, ref: 'ListingContract'},
  purchaseContract: {type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseContract'},


}, {collection: 'clients'} );

module.exports = mongoose.model('Client', clientSchema);
