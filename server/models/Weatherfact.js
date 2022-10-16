const mongoose = require("mongoose");

const WeatherfactSchema = new mongoose.Schema({
  weatherfact: {
    type: String,
    required: true,
  },
});
const Weatherfact = mongoose.model("Weatherfact", WeatherfactSchema);

module.exports = Weatherfact;
