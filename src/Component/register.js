
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Fragment,Component } from "react";
import { Button } from "react-bootstrap";
import Database from "./database";
class Register extends Component{
    state={
        email:"",
        password:""
    }
    handleEmailChange=(e)=>this.setState({email:e.target.value})
    handlePassChange=(e)=>this.setState({password:e.target.value})
    
    createAccount=()=>{
       const {email,password}=this.state;
        return(
           
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((user) => {
              // Signed in 
              console.log("Connected")
              console.log(user)
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage)
              // ..
            })
        )
    }
    render(){
        return(
            <Fragment>
            <input placeholder="Eamil Address" onChange={this.handleEmailChange}/>
            <input placeholder="Password" onChange={this.handlePassChange} />
            <Button onClick={this.createAccount}>Register</Button>
            <Database data={this.state} />
            </Fragment>
            
        )
    }
}
export default Register;