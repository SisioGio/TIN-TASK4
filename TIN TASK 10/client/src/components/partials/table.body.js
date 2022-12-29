
import React from "react";
import TableRow from './row'
import NewRow from './newRow'

function TableBody(props) {

React.useEffect(()=>{


},[props.rows])
  return (

           
           <tbody>
 {props.rows.map(function(row,i){
return(

   
    <TableRow mykey = {i} row={row} columns={props.columns}  table={props.table} generateTableForm={props.generateTableForm} getData={props.getData} />
)
})}

{props.columns?(
    <NewRow  setFeedback={()=>props.setFeedback} columns={props.columns}  table={props.table} generateTableForm={props.generateTableForm} getData={props.getData}/>
):(null)}


           </tbody>
        
  );
}

export default TableBody;