var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String,
    required: true,
    default: "N/A"
  },
  dueDate: { 
    type: Date,
    default: Date.now
  },


}, {collection: 'tasks'} );

module.exports = mongoose.model('Task', taskSchema);
