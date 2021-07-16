const mongoose = require('mongoose')

const gschema = new mongoose.Schema({
  Guild: String,
  RoleId: String
})

module.exports = mongoose.model('gawping-schema', gschema)