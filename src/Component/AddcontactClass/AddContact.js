import { Component } from "react";

export default class Addcontactclass extends Component{
    constructor(props){
        super(props)
    this.state={username:"",
        phone:""
    }
    
    }
   Add=(e)=>{
       e.preventDefault();
        this.props.adddata(this.state)
        // console.log(this.state.username);
        // console.log(this.state.phone);
    }
    render(){
        return(
            <>
            <div className="registration-form mt-4 mx-auto">
            <form onSubmit={this.Add}>
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className="form-group">
                <label >Contact Name</label>
                <input type="text" className="form-control item"  name="uname" onChange={(e)=>this.setState({username:e.target.value})} value={this.state.username}/>
            </div>
           
            
            <div className="form-group">
            <label >Contact Number</label>
                <input type="text" className="form-control item" name="number" onChange={(e)=>this.setState({phone:e.target.value})} value={this.state.phone}/>
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
}