const db = require("../models");
const Cart = db.cart;
const Op = db.Sequelize.Op;
const User = db.user;
const Product = db.product;
// Create and Save a new Cart
exports.create = (req, res) => {
    // Validate request
    
  

    // Save Cart in the database
   
    Cart.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });

    // var newCart = Cart.build(cart)
    // newCart.save().then(function(){
    //   // newCart.addUser(user)
    //   res.send(data);
    // }).catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while creating the Cart."
    //   });
    // });
    
      
  };

// Retrieve all Carts from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Cart.findAll({include :[db.product]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Carts."
        });
      });
  };
// Retrieve all Carts from the database.
exports.getItems = (req, res) => {
  const cartId = req.body.cartId;

  Cart.findOne({ where:{ id:cartId}, include: 
    ["items",
      {
        model:db.product,
        
        as:  "product"
      }
    ]
    }).then(result=>{
    
    res.send(result)
  }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Carts."
      });
    });
};



// Find a single Cart with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Cart.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Cart with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cart with id=" + id
        });
      });
  };

// Update a Cart by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const published = req.body.published
    console.log(published)
    console.log(req.body)
    Cart.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cart was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cart with id=" + id
        });
      });
  };

// Delete a Cart with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Cart.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cart was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Cart with id=" + id
        });
      });
  };

// Delete all Carts from the database.
exports.deleteAll = (req, res) => {
    Cart.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Carts were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Carts."
        });
      });
  };

// Find all published Carts
exports.findAllPublished = (req, res) => {
    Cart.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Carts."
        });
      });
  };