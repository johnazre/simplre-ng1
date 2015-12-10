var Purchase = require('../Models/PurchaseContract');

module.exports = {
  create: function(req, res) {
    var newPurchase = new Purchase(req.body);
    newPurchase.save( function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  read: function(req, res) {
    console.log('req.query: ', req.query);
    Purchase.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function(req, res) {
    Purchase
    .find({_id: req.params.id})
    .exec()
    .then(function(result) {
      return res.send(result);
    }, function (err) {
      return res.status(500).send(err);
    });
  },

  update: function(req, res) {
    Purchase.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    Purchase.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

};
