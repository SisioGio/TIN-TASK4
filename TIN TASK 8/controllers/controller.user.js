// const { json } = require("body-parser");
const db = require("../models");
const schemaJson = require( './../models/schema.json')
const moment = require("moment");



exports.getTables = async  (req,res)=>{

// Get all tables in database and render them as buttons with click functionalities

db.connection.query("SHOW TABLES",function(err,result,fields){
  if(err) {
        console.log("Error while retrieving tables...");
        res.render("pages/error",{error:"Error while executing query 'SHOW TABLES'. You first need to creatre a database as explained in the docs."})
        throw err;
  };
        res.render("pages/dashboard",{tables:result})
});

}

exports.showTable= async (req,res)=>{
  // Renders an ejs file for the corresponding table passed as parameter
  const table = req.param("table")
  const queryString = "SELECT * FROM " + table

  console.log(queryString);
  
  db.connection.query(queryString,function(err,result){
    if(err) {
      console.log("Error getting rows...")
      res.render("pages/error",{error:err})
      throw err;
    } else {
      if(result.length === 0){
      var columns = []
      var actionForm = "add" + table
      res.locals.moment = moment;
      data = null;
      } else {
      var columns = Object.keys(result[0])
      console.log(columns)
      var actionForm = "add" + table
      res.locals.moment = moment;
      }
    };
   
      res.render("pages/table",{actionForm:actionForm,schemaJson:schemaJson,table:table,columns:columns,data:result})
    
  })

}


exports.create= async (req,res)=>{
  console.log("ADDING TO DATABASE")
  const formData = req.body;
  const table = formData.table;
// Get form keys
  columns = Object.keys(formData);
// Clearing form data to match MYSQL rules
  var queryStringColumns = JSON.stringify(columns).replace(/\"/g, "").replace("[","").replace("]","").replace(",table","") 
  var values = JSON.stringify(Object.values(formData)).replace("[","").replace("]","").replace(',"'+table+'"',"").toUpperCase();
// Creating query based on received form
  var query = "INSERT INTO  " + table + " (" + queryStringColumns + ") VALUES (" +values + ")";
  console.log(query)
  db.connection.query(query,function(err,result){
    if(err) {
      res.render("pages/error",{error:err})
    } else{
      res.redirect(req.headers.referer)
      
    };
  })
 
}


exports.form = (req,res) =>{
  const table = req.param("table")

  if(table){
    const queryString = "SELECT * FROM " + table + " LIMIT 1";
    db.connection.query(queryString,function(err,result){
      if(err) {
        
        console.log("Error getting rows...")
        res.render("pages/error",{error:err})
      
      } else {
        res.locals.moment = moment;
        if(result.length === 0){
        
        data = null;
        } else {
       
        }
       
      };
     
        res.render("pages/form",{actionForm:actionForm,schemaJson:schemaJson,table:table})
    });

  } else {

  
    res.render("pages/error",{error:"No table name was passed in the url"})
    
  }

}


exports.show = (req,res) =>{
  const table = req.param("table")
  const id= req.param("id")

    if(table && id){
    const queryString = "SELECT * FROM " + table + " WHERE ID = " + id;
    console.log(queryString)
    db.connection.query(queryString,function(err,result){
      if(err) {
        
        console.log("Error getting rows...")
        res.render("pages/error",{error:err})
      } else {
        
        if(result.length === 0){
          res.locals.moment = moment;
          res.render("pages/error",{error:"The selected item does not exist"})
        } else {
          var item = result[0]
          res.locals.moment = moment;
        }
       
       
      };
     
        res.render("pages/show",{table:table,schemaJson:schemaJson,item:item})
    });

  }


}

exports.docs = (req,res) =>{

  res.render('pages/docs')
}