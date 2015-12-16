var mongoose = require('mongoose');

var ListingContractSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  client: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
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
  source: {
    type: String,
    enum: [
      'Friend',
      'Family',
      'Lead Website',
      'Other'
    ]
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

}, {collection: 'ListingContracts'} );

module.exports = mongoose.model('ListingContract', ListingContractSchema);
