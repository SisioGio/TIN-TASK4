const db = require("../models");
const cart_item = db.cart_item;
const Op = db.Sequelize.Op;

// Create and Save a new cart_item
exports.create = (req, res) => {

  
 
  
    // Save cart_item in the database
    cart_item.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the cart_item."
        });
      });
  };

// Retrieve all cart_item from the database.
exports.findAll = (req, res) => {

  
    cart_item.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cart_items."
        });
      });
  };

// Find a single cart_item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    cart_item.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find cart_item with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving cart_item with id=" + id
        });
      });
  };

// Update a cart_item by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const published = req.body.published
    console.log(published)
    console.log(req.body)
    cart_item.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "cart_item was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update cart_item with id=${id}. Maybe cart_item was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating cart_item with id=" + id
        });
      });
  };

// Delete a cart_item with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    cart_item.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "cart_item was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete cart_item with id=${id}. Maybe cart_item was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete cart_item with id=" + id
        });
      });
  };

// Delete all cart_items from the database.
exports.deleteAll = (req, res) => {
    cart_item.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} cart_items were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all cart_items."
        });
      });
  };

// Find all published cart_items
exports.findAllPublished = (req, res) => {
    cart_item.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cart_items."
        });
      });
  };