// client/src/App.js

import React from "react";
import logo from './../../images/ether_logo.png'
import {BrowserRouter as Router,Switch,Link,Route,ueRouteMatch,useParams} from 'react-router-dom'

function Header() {
  

  return (
    <div id="nav-container">
    <nav>
       <div id="logo">
          <div >
            <img  src={logo} alt="TIN10 Logo"></img>
         
          </div>
          <label >Juventus Shop</label>
       </div>
       <div className="toggle-nav untoggled">
          <span></span>
          <span></span>
          <span></span>
       </div>
       <ul id="nav-links" className="nav-hidden">
          <li>
            <Link to="/">Home</Link>
            
          </li>
          <li>
          <Link to="/database">Database</Link>

         </li>
         <li>
         <Link to="/docs">Docs</Link>
     
          </li>
         
       </ul>
    </nav>
 </div>


  );
}

export default Header;