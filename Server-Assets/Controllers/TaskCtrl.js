var Task = require('../Models/Task');

module.exports = {
  create: function(req, res) {
    var newTask = new Task(req.body);
    newTask.save( function(err, result) {
      if(err){
        return res.status(500).send(err);
        console.log("not working");
      }
      else{ res.send(result);}
    });
  },

  read: function(req, res) {
    Task.find(req.query)
    .populate('task')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function(req, res) {
    Task
    .find({_id: req.params.id})
    .populate('task')
    .exec()
    .then(function(result) {
      return res.send(result);
    }, function (err) {
      return res.status(500).send(err);
    });
  },

  update: function(req, res) {
    Task
    .findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      console.log(req.body);
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

};
