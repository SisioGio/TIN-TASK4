const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./../server/models");
const { cart } = require("./../server/models");



db.user.hasOne(db.cart,{foreignKey:"userId"});
db.cart.belongsTo(db.user,{foreignKey:"userId"});


db.cart.belongsToMany(db.product, { through: db.cart_item });
db.product.belongsToMany(db.cart, { through: db.cart_item });
db.cart.hasMany(db.cart_item);
db.cart_item.belongsTo(db.cart);
db.product.hasMany(db.cart_item);
db.cart_item.belongsTo(db.product);



// db.product.hasOne(db.cart_item,{foreignKey:"productId",as:"cart_item"});
// db.cart_item.belongsTo(db.product,{foreignKey:"productId",as:"product"});
// db.cart.hasMany(db.cart_item,{as:"items"})
// db.cart_item.belongsToMany(db.cart,{through:db.cart_item});



db.sequelize.sync({force:false})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



// db.carts.sync();
// db.orders.sync();
// db.deliveries.sync();
// db.products.sync();
// db.users.sync();
// Create 1:M relationship between products and inventory ( used to store how many items we received )




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// require("./routes/tutorial.routes")(app);
require("./routes/user.routes")(app);
require("./routes/product.routes")(app);
require("./routes/cart.routes")(app);
require("./routes/cart_item.routes")(app);
// require("./routes/delivery.routes")(app);
// require("./routes/financial.routes")(app);
// require("./routes/order.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});