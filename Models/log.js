const mongoose = require('mongoose')

const cschema = new mongoose.Schema({
  Guild: String,
  Channel: String
})

module.exports = mongoose.model('channel', cschema)