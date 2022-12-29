const db = require("../models");
const Financial = db.financial;
const Op = db.Sequelize.Op;

// Create and Save a new Financial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Financial
    const financial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Financial in the database
    Financial.create(financial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Financial."
        });
      });
  };

// Retrieve all Financials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Financial.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Financials."
        });
      });
  };

// Find a single Financial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Financial.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Financial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Financial with id=" + id
        });
      });
  };

// Update a Financial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const published = req.body.published
    console.log(published)
    console.log(req.body)
    Financial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Financial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Financial with id=${id}. Maybe Financial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Financial with id=" + id
        });
      });
  };

// Delete a Financial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Financial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Financial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Financial with id=${id}. Maybe Financial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Financial with id=" + id
        });
      });
  };

// Delete all Financials from the database.
exports.deleteAll = (req, res) => {
    Financial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Financials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Financials."
        });
      });
  };

// Find all published Financials
exports.findAllPublished = (req, res) => {
    Financial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Financials."
        });
      });
  };