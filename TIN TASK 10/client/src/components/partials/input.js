// client/src/App.js

import React from "react";
import { useState } from "react";



function InputField(props) {
   const[isValid,setIsValid] = useState(true)

    const onChange = (event)=>{
     
        if(event.target.type !== "checkbox"){
    
            if(event.target.value.length < 4 && event.target.type ==="text"){
              
                setIsValid(false)
            } else{
                setIsValid(true)
            }
            
        }
     
        props.onChange(event)
    }
  return (

    
                <td key={props.mykey}>
                    <input onChange={onChange} type={props.type}  placeholder={props.placeholder} disabled={props.disabled} name={props.name} value={props.value} />
               
                    {isValid !== true?(
                        <small  >This column must contain at least 3 characters!</small>
                    ):(
                        null
                    )}
                </td>
             
                                
                           
                      
    )
            


}

export default InputField;