var mongoose = require('mongoose');

var PurchaseContractSchema = new mongoose.Schema({
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
      'Pending',
      'Closed',
      'Cancelled'
    ],
    required: true,
  },
  contractDate: Date,
  projectedCloseDate: Date,
  actualCloseDate: Date,
  listPrice: Number,
  offerPrice: Number,
  salePrice: Number,
  commissionPercentage: Number,
  units: Number,
  gci: Number,
  companyDollar: Number,
  royalty: Number,
  referralPaid: Number,
  eAndO: Number,
  appraisalDate: Date,
  mortgageCompany: String,
  titleEscrowCompany: String,

}, {collection: 'PurchaseContracts'} );

module.exports = mongoose.model('PurchaseContract', PurchaseContractSchema);
