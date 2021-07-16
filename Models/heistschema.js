const mongoose = require('mongoose')

const hschema = new mongoose.Schema({
  Guild: String,
  RoleId: String
})

module.exports = mongoose.model('heist-schema', hschema)