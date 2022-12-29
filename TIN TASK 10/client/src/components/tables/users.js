// client/src/App.js

import React from "react";
import Row from './../partials/row'
import NewRow from './../partials/newRow'

function Users() {
   const [data, setData] = React.useState([]);
   const [columns,setColumns]=React.useState([])
   
   const updateValues =()=>{
      console.log("Fetching data...")
    fetch("/api/user/")
      
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
         if(data.length>0){
            const columns = Object.keys(data[0]);
            console.log(columns)
            setColumns(columns)
         }
         setData(data)});
   }
  React.useEffect(() => {
   updateValues();
  }, []);

  return (
   <div id="table">
         <table>
            <thead>
               <tr>
                  {columns.map(column =>{
                     return(
                        <th>{column}</th>
                     )
                    
                  })}

                  <th>Action</th>
               </tr>
            </thead>
        <tbody>
        {data.map(row=>{
                           return(

                                <Row row={row} columns={columns} />
                           
                            
                           )
                        })}

         <NewRow updateValues={updateValues}/>
        </tbody>
         

                     
     
</table>
   </div>



  );
}

export default Users;