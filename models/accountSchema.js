const mongoose = require('mongoose')
const Schema = mongoose.Schema
const accountSchema = new Schema({
  firstName: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Users', accountSchema)
