module.exports = app => {
    const controller = require("../controllers/controller.user.js");
  
    // var router = require("express").Router();
  
  //   // Create a new Tutorial
  //   router.post("/", users.create);
  
  //   // Retrieve all Tutorials
  //   router.get("/", users.findAll);
  
  //  router.get("/show",users.renderAll);
  app.use("/docs",controller.docs)
    app.use("/show",controller.show)
    app.use("/form",controller.form)
    app.use("/create",controller.create);
    app.use('/table', controller.showTable);
    app.use("/form",controller.form)
    app.use("/",controller.getTables)
  };