// client/src/App.js


import React, { useState } from "react";

import TableHeader from "./table.header";
import TableBody from "./table.body";
import Database from './../partials/database.json'
import Feedback from "./feedback";
function Table(props) {

  
   const[table,setTable] = useState(props.table)
   const[columns,setColumns] = useState(null)
   const[rows,setRows] = useState([])
   const[feedback,setFeedback] = useState({
      visible:false,
      title:"",
      message:""
  })
   function generateTableForm (row){
     
      var jsonForm ={}
      
      Database.tables[props.table].columns.map(column =>{
         
         if(row){
            return(
               jsonForm[column.name]= row[column.name]
            )
            
            
         } else {
           
            
            return(
               jsonForm[column.name]= ""
            )
            
         }
              
         
         
       })
      

       return jsonForm;
       
  }

      const getData = ()=>{
         console.log("Retrieving data from database...")
      fetch("/api/"+props.table+"/",{
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
          }
   
       })
        .then((res) => res.json())
        .then((data) => {
        
          setRows(data)
         });
   }
 

   React.useEffect(() => {
      if(props.table){
         console.log("Resetting columns from table " + props.table)
         setTable(props.table);
         setColumns(Database.tables[props.table].columns)
         getData();
     
        
        
      }
      
  }, [props.table])

  React.useEffect(()=>{
   // getData();
   console.log("Rows were changed!")
  },[rows])


  return (
  
   <div id='table'>
      <Feedback data={feedback}/>
      <table>
         {columns?(
               <TableHeader columns={columns}/>
         ):(
            null
         )}
        

         <TableBody  table={table} rows={rows}  columns={columns} 
         generateTableForm={generateTableForm} getData={getData}  setFeedback={()=>setFeedback}/>
      </table>




   </div>



  );
}

export default Table;