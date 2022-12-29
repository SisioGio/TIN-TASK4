module.exports = app => {
    const cartItem = require("../controllers/cart_item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new cartItem
    router.post("/", cartItem.create);
  
    // Retrieve all cartItem
    router.get("/", cartItem.findAll);
  
    // Retrieve all published cartItem
    router.get("/published", cartItem.findAllPublished);
  
    // Retrieve a single cartItem with id
    router.get("/:id", cartItem.findOne);
  
    // Update a cartItem with id
    router.put("/:id", cartItem.update);
  
    // Delete a cartItem with id
    router.delete("/:id", cartItem.delete);
  
    // Delete all cartItem
    router.delete("/", cartItem.deleteAll);
  
    app.use('/api/cartitem', router);
  };