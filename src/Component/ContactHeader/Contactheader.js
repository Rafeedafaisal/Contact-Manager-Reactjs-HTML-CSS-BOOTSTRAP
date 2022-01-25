import { useState } from "react"
import "./contactheader.css"
export default function Contactadd(props){
    const[contact,setContact]=useState({
        uname:"",
        number:""
    })
   

    const AddData=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setContact({...contact,[name]:value})
        
         }
    const Add=()=>{
        props.fnc(contact)
        
        
    }
    
    return(
        <>
        <div className="registration-form mt-4 mx-auto">
        <form onSubmit={Add}>
        <div className="form-icon">
            <span><i className="icon icon-user"></i></span>
        </div>
        <div className="form-group">
            <label >Contact Name</label>
            <input type="text" className="form-control item"  name="uname" onChange={AddData} value={contact.uname}/>
        </div>
       
        
        <div className="form-group">
        <label >Contact Number</label>
            <input type="text" className="form-control item" name="number" onChange={AddData} value={contact.number}/>
        </div>
       
        <div className="form-group">
            <button type="submit" className="btn btn-block create-account">ADD</button>
        </div>
    </form>
    {/* <input type="text" value={contact.name}></input> */}
    
</div>
</>

    )
}