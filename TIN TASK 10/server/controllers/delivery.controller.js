const db = require("../models");
const Delivery = db.deliveries;
const Op = db.Sequelize.Op;

// Create and Save a new Delivery
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Delivery
    const delivery = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Delivery in the database
    Delivery.create(delivery)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Delivery."
        });
      });
  };

// Retrieve all Deliverys from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Delivery.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Deliverys."
        });
      });
  };

// Find a single Delivery with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Delivery.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Delivery with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Delivery with id=" + id
        });
      });
  };

// Update a Delivery by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const published = req.body.published
    console.log(published)
    console.log(req.body)
    Delivery.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Delivery was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Delivery with id=${id}. Maybe Delivery was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Delivery with id=" + id
        });
      });
  };

// Delete a Delivery with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Delivery.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Delivery was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Delivery with id=${id}. Maybe Delivery was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Delivery with id=" + id
        });
      });
  };

// Delete all Deliverys from the database.
exports.deleteAll = (req, res) => {
    Delivery.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Deliverys were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Deliverys."
        });
      });
  };

// Find all published Deliverys
exports.findAllPublished = (req, res) => {
    Delivery.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Deliverys."
        });
      });
  };