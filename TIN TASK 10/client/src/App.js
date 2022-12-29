// client/src/App.js

import React, { useReducer, createContext, useContext } from "react";
import {BrowserRouter as Router,Routes,Navigate,Link,Route,ueRouteMatch,useParams} from 'react-router-dom'
import "./App.css";
import Header from './components/partials/header'
import Feedback from "./components/partials/feedback";
import Database from "./components/pages/dashboard";
import Home from "./components/pages/home";
import Docs from "./components/pages/docs";
import Footer from "./components/partials/footer";
import NotFound from "./components/pages/notFound"; 
import Table from "./components/partials/table";
import Product from "./components/pages/product";
import User from "./components/pages/user";
const showContext = createContext();
const dispatchContext = createContext();



const reducer = (state, action) => {
 
    
      return {action:action.value,message:action.message,title:action.title,type:action.type};
 
};
const states = {
  value: false,
  message:'',
  title:'',
  type:'',
};

function App() {
  const [state, dispatch] = useReducer(reducer, states);
  const pathname = window.location.pathname;

  
  return (
    <dispatchContext.Provider value={dispatch}>
      <showContext.Provider value={state}>
<div className="App">
  <Router>


      <Header/>
     
    <Routes>

      <Route path="/database" element={<Database/>}/>
      <Route path="/database/users" element={<Table table="user" />}/>
      <Route path="/database/products" element={<Table table="product" />}/>
      <Route path="/database/users/:id" element={<User  />}/>
      <Route path="/database/products/:id" element={<Product  />}/>

      <Route path="/docs" element={ <Docs/>}/>
       


      <Route path="/" element={ <Home/>}/>
       
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   
    </Router>
    <div class="spacerXL"></div>
    <Footer/>
    </div>
    </showContext.Provider>
    </dispatchContext.Provider>
    
  );
}

export default App;

export const dispatchContexts = () => useContext(dispatchContext);
export const showContexts = () => useContext(showContext);
