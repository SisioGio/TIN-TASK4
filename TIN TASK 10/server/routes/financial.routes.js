module.exports = app => {
    const financials = require("../controllers/financial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Financial
    router.post("/", financials.create);
  
    // Retrieve all financials
    router.get("/", financials.findAll);
  
    // Retrieve all published financials
    router.get("/published", financials.findAllPublished);
  
    // Retrieve a single Financial with id
    router.get("/:id", financials.findOne);
  
    // Update a Financial with id
    router.put("/:id", financials.update);
  
    // Delete a Financial with id
    router.delete("/:id", financials.delete);
  
    // Delete all financials
    router.delete("/", financials.deleteAll);
  
    app.use('/api/financial', router);
  };