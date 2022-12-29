// client/src/App.js

import React from "react";
import { useState } from "react";
import moment from 'moment';
import axios from "axios";
import InputField from './input'
import { dispatchContexts, showContexts } from "./../../App";


function Feedback(props) {
   const[data,setData]= useState(props.data)

   const closeFeedback =()=>{
    dispatch({ value: false});
   }
   const feedback = showContexts();
   console.log(feedback)
   React.useEffect(()=>{
    console.log(props.data)
    setData(props.data)
   },[])
   const dispatch = dispatchContexts();
  return (

   
      
                                
                                <div>
                                
                                {feedback.action ? (
                                      <div id='feedback'   style={{width:"100%",position:"absolute",padding:"1rem",backgroundColor:feedback.type==="Error"?"red":"green"}}>

                                      <h3 style={{padding:"1rem"}} >{feedback.title}</h3>
                                      <p>{feedback.message}</p>
                                        <button onClick={closeFeedback}>Close</button>
                                      {/* <button onClick={closeFeedback}>X</button> */}
                                  </div>
                                ) : " "}
                              </div>     
                      
    )
            


}

export default Feedback;