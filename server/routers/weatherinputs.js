const { Router } = require("express");
const Weatherinput = require("../models/Weatherinput");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newWeatherinput = new Weatherinput(request.body);
  newWeatherinput.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
