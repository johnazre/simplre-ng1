var Listing = require('../Models/ListingContract');

module.exports = {
  create: function(req, res) {
    var newListing = new Listing(req.body);
    newListing.save( function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  read: function(req, res) {
    Listing.find(req.query)
    .populate('client')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function(req, res) {
    Listing
    .find({_id: req.params.id})
    .populate('client')
    .exec()
    .then(function(result) {
      return res.send(result);
    }, function (err) {
      return res.status(500).send(err);
    });
  },

  update: function(req, res) {
    Listing.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    Listing.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

};
