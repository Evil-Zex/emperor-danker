const mongoose = require('mongoose')

const gdschema = new mongoose.Schema({
  Guild: String,
  RoleId: String
})

module.exports = mongoose.model('annoucnecment pings', gdschema)