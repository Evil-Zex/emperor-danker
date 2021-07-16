const mongoose = require('mongoose')

const mmschema = new mongoose.Schema({
  Guild: String,
  RoleId: String
})

module.exports = mongoose.model('mm-schema', mmschema)