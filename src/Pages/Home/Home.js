import { useEffect, useState } from "react";
import Addcontactclass from "../../Component/AddcontactClass/AddContact";
import Display from "../../Component/ContactBody/Contactbody";
import Contactadd from "../../Component/ContactHeader/Contactheader";
import Contactlist from "../../Component/Contactlist/Contactlist";
// import {uuid} from "uuidv4"
import {v4 as uuidv4} from "uuid"
export default function Home(){
    const[contact,setContact]=useState([])
    
    // const fname=(data)=>{
    //     setContactc(data)
    //     console.log(data);
    // }
    const getdata=(data)=>{
       
        setContact([...contact,{id:uuidv4(),...data}])
    }
    console.log(uuidv4());
    const dummy=[{username:"rafeeda",phone:"9048454043"},{
        username:"jihana",phone:"7025657974"
    }]
    //geeting the data from local storage
    useEffect(() => {
        const localdata=JSON.parse( localStorage.getItem("Contacts"))
        if(localdata){
            setContact(localdata)
        }
     },[]);
     //storing data to the localstorage
    useEffect(() => {
        // here contacts is the key
        localStorage.setItem("Contacts",JSON.stringify(contact))
       
    },[contact])
    const idd=(datas)=>{
        console.log("parent"+datas);
        const filtervar=contact.filter(deletefunction)
        // setContact([...contact,{...datas}])
        function deletefunction(contact){
console.log("the contact id are"+contact.id);
            return contact.id!=datas
        }
        console.log(filtervar);
        setContact(filtervar)
    }
   
    return(<>
    {/* <div>
        {
            contactc.map((details,i)=>{
                console.log(details);
                <Contactlist key={i} dataaa={details}/>
            })
        }
    </div>
        <Contactadd fnc={fname}/> */}
         <Addcontactclass adddata={getdata}/>
        <Contactlist arr={contact} remove={idd}/>
       

        </>
    )
}