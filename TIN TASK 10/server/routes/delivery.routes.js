module.exports = app => {
    const Deliveries = require("../controllers/delivery.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Delivery
    router.post("/", Deliveries.create);
  
    // Retrieve all Delivery
    router.get("/", Deliveries.findAll);
  
    // Retrieve all published Delivery
    router.get("/published", Deliveries.findAllPublished);
  
    // Retrieve a single Delivery with id
    router.get("/:id", Deliveries.findOne);
  
    // Update a Delivery with id
    router.put("/:id", Deliveries.update);
  
    // Delete a Delivery with id
    router.delete("/:id", Deliveries.delete);
  
    // Delete all Deliveries
    router.delete("/", Deliveries.deleteAll);
  
    app.use('/api/delivery', router);
  };