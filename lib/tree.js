const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  appearance: {
    leafType: {
      type: String,
      required: true,
      enum: ['broad', 'needle']
    },
    leafLobes: {
      type: Number,
      min: 0,
      max: 10
    },
    alternateBranching: {
      type: Boolean,
      default: true
    }
  },
  lifeCycle: [{
    type: String,
    enum: ['deciduous', 'coniferous']
  }]
});

module.exports = mongoose.model('Tree', schema);