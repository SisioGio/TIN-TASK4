// client/src/App.js

import React from "react";
import {Link,useLocation} from 'react-router-dom'

function Tables(props) {
   const location = useLocation(); 
   
  return (
  
   <div id='tables'>

      <div  className="tables-item">
      <Link to={location.pathname.endsWith("/")?`${location.pathname.slice(0,-1)}/users`:`${location.pathname}/users`}>Users</Link>
         
      </div>
   
      <div  className="tables-item">
      <Link to={location.pathname.endsWith("/")?`${location.pathname.slice(0,-1)}/products`:`${location.pathname}/products`}>Products</Link>
     
      </div>

   </div>



  );
}

export default Tables;