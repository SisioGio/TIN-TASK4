// client/src/App.js

import React from "react";
import { useState } from "react";

function TableHeader(props) {
const[columns,setColumns] = useState(props.columns)

React.useEffect(() => {
   setColumns(props.columns)
}, [props.columns])

  return (

            <thead>
            {columns? (
 <tr>
 {props.columns.map(function(column,i){
       return(
          <th key={i}>{column['name']}</th>
       )
      
    })}
   <th>Edit</th>
   <th>Delete</th>
   <th>Open</th>
 </tr>
            ):
            (
               <h1>No columns retrieved!</h1>
            )}
              
            </thead>
        
  );
}

export default TableHeader;