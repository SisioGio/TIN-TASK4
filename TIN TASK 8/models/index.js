const dbConfig = require("../db.config.js");
const functions = require("./models.functions")
const mysql = require("mysql");
const connection = mysql.createConnection( {
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database:dbConfig.DB,


});


const db = {};


db.connection = connection;
db.users = require("./model.user.js");



module.exports = db;