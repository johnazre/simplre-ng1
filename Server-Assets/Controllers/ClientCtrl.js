var Client = require('../Models/Client');

module.exports = {
  create: function(req, res) {
    var newClient = new Client(req.body);
    newClient.save( function(err, result) {
      if (err) return res.status(500).send(console.log(err));
      res.send(result);
    });
  },

  read: function(req, res) {
    Client.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(console.log(err));
      res.send(result);
    });
  },

  readOne: function(req, res) {
    Client
    .find({_id: req.params.id})
    .exec()
    .then(function(result) {
      return res.send(result);
    }, function (err) {
      return res.status(500).send(err);
    });
  },

  update: function(req, res) {
    Client.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    Client.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

};
