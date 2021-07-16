const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  Guild: String,
  RoleId: String
})

module.exports = mongoose.model('gaw-schema', schema)