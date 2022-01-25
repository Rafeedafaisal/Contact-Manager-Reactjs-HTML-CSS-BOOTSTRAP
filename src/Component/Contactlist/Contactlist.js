import Display from "../ContactBody/Contactbody";
import Delete from '@material-ui/icons/Delete';
import "./contactlist.css"
export default function Contactlist(props){
 const mapouput=   props.arr.map((details,i)=>{
        console.log(details);
        console.log(details.username);
      const Del=()=>{
        const idd=details.id;
      //  console.log("the id are"+idd);
      props.remove(idd)
       }
        return(
            <div id="ddiv" className="container mx-auto" key={details.id}> 
            <div className="row">
              <div className="col-sm-2 mt-2">
              <img src="https://www.pinclipart.com/picdir/middle/537-5375838_google-messages-logo-clipart.png"></img>
              </div>
              <div className="col-sm-2 mt-2">
              <span>{details.username}</span>
              <p id="pp">{details.phone}</p>
                </div>

                <Delete className="offset-7 mt-3 btn-outline-danger" onClick={Del}/>
            </div>
            
              
          </div>
        )
    })
    return(
        <div>
            {/* {dataa.name} */}
            {/* <div id="ddiv"> 
          <div className="row">
            <div className="col-sm-2">
            <img src="https://www.pinclipart.com/picdir/middle/537-5375838_google-messages-logo-clipart.png"></img>
            </div>
            <div className="col-sm-2">
            <span>{arr.username}</span>
            <p id="pp">{arr.phone}</p>
              </div>
          </div>
          
            
        </div> */}
            {/* <Display/> */}
            {mapouput}
        </div>
    )
}