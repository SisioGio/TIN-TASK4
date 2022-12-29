module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", product.create);
  
    // Retrieve all product
    router.get("/", product.findAll);

  // Add product to cart
  router.post("/toCart", product.addToCart);

    router.get("/cart", product.findCart);
    // Retrieve all published product
    router.get("/published", product.findAllPublished);
  
    // Retrieve a single Product with id
    router.get("/:id", product.findOne);
  
    // Update a Product with id
    router.put("/:id", product.update);
  
    // Delete a Product with id
    router.delete("/:id", product.delete);
  
    // Delete all product
    router.delete("/", product.deleteAll);
  
    app.use('/api/product', router);
  };