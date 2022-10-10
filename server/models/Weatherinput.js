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
    enum: ["Yes", "No"],
  },
  current: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/,
  },
});
const Weatherinput = mongoose.model("Weatherinput", WeatherinputSchema);

module.exports = Weatherinput;
