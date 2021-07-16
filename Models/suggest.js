const mongoose = require('mongoose')

module.exports = mongoose.model(
  'Suggest',
  new mongoose.Schema({
    Guild: String,
    Channel: String
  })
)