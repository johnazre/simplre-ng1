var mongoose = require('mongoose');

var PurchaseContractSchema = new mongoose.Schema({
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
  client: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
  contractSignedDate: Date,
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

}, {collection: 'PurchaseContracts'} );

module.exports = mongoose.model('PurchaseContract', PurchaseContractSchema);
