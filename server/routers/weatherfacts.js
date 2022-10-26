const { Router } = require("express");
const Weatherfact = require("../models/Weatherfact");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newWeatherfact = new Weatherfact(request.body);
  newWeatherfact.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Weatherfact.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Weatherfact.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// Delete all records
router.delete("/", (request, response) => {
  Weatherfact.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Weatherfact.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Weatherfact.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        weatherfact: body.weatherfact,
      },
    },
    {
      new: true,
      upsert: true,
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
