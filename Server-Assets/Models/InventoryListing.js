var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum:[
      'Pre-signed',
      'Active',
      'Pending',
      'Closed',
      'Cancelled'
    ],
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true
  },
  listingSignedDate: Date,
  listingExpirationDate: Date,
  projectedCloseDate: Date,
  actualCloseDate: Date,
  listPrice: {
    type: Number,
    required: true,
  },
  salePrice: Number,
  commissionPercentage: Number,
  units: Number,
  gci: Number,
  companyDollar: Number,
  royalty: Number,
  referralPaid: Number,
  eAndO: Number,
  inspectionDate: Date,
  appraisalDate: Date,
  mortgageCompany: String,
  titleEscrowCompany: String,

}, {collection: 'inventoryListings'} );

module.exports = mongoose.model('Listing', listingSchema);
