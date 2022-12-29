// client/src/App.js


import React, { useState } from "react";

function Docs() {


  return (
  
  <div>
<div class="spacerXL"></div>

    <h1>DOCS</h1>

    <p><br></br> The app is using a node.js backend connected to a MYSQL database via Sequelize.<br></br> 
      
      <br></br> As in the previous assignmed, I tried to create dynamic tables and forms based on a JSON file which describes the tables and the corresponding fields to visualize or edit.
      <br></br> 
      The table allows to add/update/delete items, in order to test it you need to connect your database and edit the parameter 'force' to true in server.js file,
      this parameter drops and creates all the table once again so you need to reset it to false after the first run.
      <br></br> 
      In the database there are defined several tables connected to the purchase process which have not been included in this app yet.
      
      </p>
  </div>


  );
}

export default Docs;