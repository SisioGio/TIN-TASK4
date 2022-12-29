// client/src/App.js

import React, { useContext } from "react";
import { useState } from "react";
import moment from 'moment';
import axios from "axios";
import InputField from './input'
import Feedback from "./feedback";
import { dispatchContexts, showContexts } from "./../../App";

function NewRow(props) {
   const[formData,setFormData] = useState(props.generateTableForm(null))
   const[columns,setColumns] = useState(props.columns)
    const[editable,setIsEditable] = useState(false)

   const addRow = (event) =>{

    event.preventDefault();
    const form = new FormData();
    
    columns.map(column =>{
        if(column.disabled === false ){
          
            if(column.type==="date"){
                return(
                    form.append(column.name,moment(formData[column.name]).format('yyyy-MM-DD'))
                )
                
            }else{
                return(
                    form.append(column.name,formData[column.name])
                )
         
            }
            
        }
    })

    axios.post("/api/"+props.table+"/", form,
    {headers: {
                    'Content-Type':'application/json'
                }
    })  
    .then((res) => {
            console.log(res)
            props.getData();
            setFormData(props.generateTableForm(null))
            console.log("New form is: ")
            console.log(formData)
    })
    .catch((err) => {
        console.log('Error!')
        console.log(err.response.data)
        dispatch({ value: true,message:err.response.data.message,title:"Error" ,type:"Error"});
    })
   
    setIsEditable(false)

   
}

    // Update formData on input change
  function handleChange(event) { 
    const {value, name} = event.target
    if(event.target.type==="checkbox"){
        
        let checkBoxValue = event.target.checked ? "checked":""
      
    setFormData(prevNote => ({
        
        ...prevNote, [name]: checkBoxValue})
    )
    } else{
        
        setFormData(prevNote => ({
        
            ...prevNote, [name]: value})
        )
    }
    
}
const dispatch = dispatchContexts();


React.useEffect(()=>{
    setColumns(props.columns)

},[props.columns])


  return (

        <tr>




{props.columns.map(column =>{
                     return(
                    
                        <InputField 
                                onChange={handleChange} 
                                type={column.type} 
                                disabled={column.disabled} 
                                name={column.name} 
                                value={column.type==="datetime-local"?(moment().format('yyyy-MM-DD hh:mm:ss')) : (column.type==="date"? (moment(formData.birthDate).format('yyyy-MM-DD')):formData[column.name])}  placeholder={column.placeholder}/>
                     )
                    
                  })}
    
                <td>
                        <button onClick={addRow}>Save</button>
                </td> 
         
          
        </tr>
                                
                           
                      
    )
            


}

export default NewRow;