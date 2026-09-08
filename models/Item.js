const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  barcode: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  category: String,
  unit: String,
  price: {
    type: Number,
    default: 0
  },
  minStock: {
    type: Number,
    default: 10
  },
  currentStock: {
    type: Number,
    default: 0
  },
  location: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', itemSchema);
