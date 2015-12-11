var User = require('../Models/User');

module.exports = {
  // create: function(req, res) {
  //   var newUser = new User(req.body);
  //   newUser.save( function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.send(result);
  //   });
  // },

  read: function(req, res) {
    console.log('req.query: ', req.query);
    User.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function(req, res) {
    User
    .find({_id: req.params.id})
    .exec()
    .then(function(result) {
      return res.send(result);
    }, function (err) {
      return res.status(500).send(err);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

};
