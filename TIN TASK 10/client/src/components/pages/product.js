// client/src/App.js
import Feedback from "../partials/feedback";
import React, { useState } from "react";
import moment from 'moment';
import { dispatchContexts, showContexts } from "./../../App";
import {
    useParams
  } from "react-router-dom";

function Product() {
      const[data,setData] = useState({})
    let { id } = useParams();


    const getProduct = ()=>{
      console.log("Retrieving data from database...")
   fetch("/api/product/"+id,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
     .then((res) => {
      if (res.ok) {
        return res.json()
      } else  {
        throw "An error occurred"
      }
    }
     
     )
     .then((data) => {
     
       setData(data)
       console.log(data)
      }).catch((err) =>{
        console.log("error")
        dispatch({ value: true,message:`Error, the Product with id = ${id} does not exist `,title:"Error" ,type:"Error"});
      });
}
const dispatch = dispatchContexts();
React.useEffect(() => {
  
    
  getProduct();
  
  
}, [id])
  return (
  
   <div id='Product'>
     <Feedback/>
        <div className="spacerS">

        </div>
        <h1>Requested Product ID: {id}</h1>
        <div>
          <label htmlFor="">title</label>
          <input type="text" disabled={true}  value={data.title}/>
        </div>

        <div>
          <label htmlFor="">description</label>
          <input type="text" disabled={true}  value={data.description}/>
        </div>
        <div>
          <label htmlFor="">price</label> 
          <input type="number" disabled={true}  value={data.price}/>
        </div>
        <div>
          <label htmlFor="">cart_item</label>
          <input type="number" disabled={true}  value={data.cart_item}/>
        </div>
        
        <div>
          <label htmlFor="">createdAt</label>
          <input type="datetime-local" disabled={true}  value={moment(data.createdAt).format('yyyy-MM-DD hh:mm:ss')}/>
        </div>
        <div>
          <label htmlFor="">updatedAt</label>
          <input type="datetime-local" disabled={true}  value={moment(data.updatedAt).format('yyyy-MM-DD hh:mm:ss')}/>
        </div>

   </div>



  );
}

export default Product;