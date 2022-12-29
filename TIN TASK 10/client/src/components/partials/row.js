// client/src/App.js

import React from "react";
import { useState } from "react";
import moment from 'moment';
import axios from "axios";
import InputField from './input'
import {Link,useLocation} from 'react-router-dom'

function Row(props) {
   const[isEditable,setIsEditable]= useState(false);

   const[columns,setColumns] = useState(props.columns)
   const[formData,setFormData] = useState(props.generateTableForm(props.row))
   const location = useLocation(); 

    const makeRowEditable =()=>{
        setIsEditable(true)
    }


    const updateRow = (event) =>{

        event.preventDefault();
        const form = new FormData();
        
        columns.map((column,i) =>{
            if(column.disabled === false ){
                console.log("Adding " + i + " " +  formData[column.name])
                return(
                    form.append(column.name,formData[column.name])
                )
              
            }
        })
       
      
        console.log("Updating entry " + formData.id)
        axios.put("/api/"+props.table+"/"+formData.id, form,
        {headers: {
                        'Content-Type':'application/json'
                    }
        })
        .then((res) => {
                console.log(res)
        
        
        })
        .catch((err) => {
        
            console.log(err.response.data)
        })
        
        

        props.getData();
        setIsEditable(false)

       
    }

    const deleteRow = (event) =>{

        event.preventDefault();

       
      
        console.log("Updating entry " + formData.id)
        axios.delete("/api/"+props.table+"/"+formData.id,
        {headers: {
                        'Content-Type':'application/json'
                    }
        })
        .then((res) => {
                console.log(res)
                props.getData();
        
        })
        .catch((err) => {
        
            console.log(err.response.data)
        })
        setIsEditable(false)
        
       
    }


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
React.useEffect(()=>{
    setColumns(props.columns)
    console.log(columns)
},[props.columns])
  return (

        <tr key={props.mykey}>
{props.columns.map(function(column,i){
                     return(
                      
                        <InputField  
                        mykey={i} 
                        onChange={handleChange} 
                        type={column.type} 
                        disabled={!isEditable || column.disabled} 
                        name={column.name} 
                        value={column.type==="datetime-local"?moment(formData[column.name]).format('yyyy-MM-DD hh:mm:ss'):(column.type==="date"? (moment(formData[column.name]).format('yyyy-MM-DD')):formData[column.name])}
                        placeholder={column.placeholder}/>
                     )
                    
                  })}

               
                <td>
                    {isEditable?(
                        <button onClick={updateRow}>Save</button>
                    ):
                    (
                        <button onClick={makeRowEditable}>Edit</button>
                    )}
                
                </td> 

                <td>
                <button onClick={deleteRow} >Delete</button>
                </td>

                <td>
          

                <Link to={location.pathname.endsWith("/")?`${location.pathname.slice(0,-1)}/${props.row.id}`:`${location.pathname}/${props.row.id}`}>View</Link>
                </td>
         
          
        </tr>
                                
                           
                      
    )
            


}

export default Row;