const mongoose = require('mongoose');
const TableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  gametype: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
    default: 10000,
  },
  maxPlayers: {
    type: Number,
    required: true,
    default: 5,
  }
});

module.exports = Table = mongoose.model('table', TableSchema);