const mongoose = require("mongoose");

const WeatherinputSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
  },
  rain: {
    type: String,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"],
  },
  current: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/,
  },
});
const Weatherinput = mongoose.model("Weatherinput", WeatherinputSchema);

module.exports = Weatherinput;
