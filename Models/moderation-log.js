const mongoose = require('mongoose')

const mschema = new mongoose.Schema({
  Guild: String,
  Channel: String
})

module.exports = mongoose.model('moderationchannel', mschema)