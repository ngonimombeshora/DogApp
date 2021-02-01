// Create a dog schema
// create a new Dog model based on the created schema

const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  characteristics: Array,
})

module.exports = mongoose.model("Dog", schema)
