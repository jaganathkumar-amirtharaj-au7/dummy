
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Button } from "react-bootstrap";
import { Component, Fragment } from "react";

class Database extends Component{
    state={

    }
    deletedata=async ()=>{
        const db=firebase.firestore;
        db.collection("Users").doc("Jaganathkumar13@gmail.com").delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    fetchdata=async()=>{
        const  db = firebase.firestore();
        const collection=await db.collection("Users").doc("Jaganathkumar13@gmail.com").get().then(e=>{
            if(e.exists) console.log(e.data())
            console.log("Document is Empty")
        }).catch(err=>console.log("error",err))
        
    }
    fetchdataall=async ()=>{
        const  db = firebase.firestore();
        db.collection("Users").get().then((q) => {
            q.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }
    async componentDidMount (){
        const  db = firebase.firestore();
        const collection=await db.collection("Users").doc("Jaganathkumar013@gmail.com");
        const data=  collection.set({username:"jaganathkumar",email:"jaganathkumar13@gmail.com",phonenumber:6381674793,friends:{
            requests:[],confirmed:[],requested:[]},message:{}
        })  
        console.log(data)
}
    
    render(){
        
            
        return(
            <Fragment>
                <Button onClick={this.fetchdata}>Fetch</Button>
                <Button onClick={this.fetchdataall}>Fetchall</Button>
                <Button onClick={this.deletedata}>Delete</Button>
            </Fragment>
        )
    }
}
 
export default Database;

// const collection=db.collection("Users");
// const doc=collection.doc("Jaganathkumar13@gmail.com");
//     const getOptions = {
//         source: 'cache'
//     };
//     doc.get().then(e=>{
        
//         console.log((e.exists)?console.log(e.data()):console.log("No Document Found"))
//     }).catch(err=>console.log("error",err))
// }
// const userdata =()=>{
//     const  db = firebase.firestore();
// const collection=db.collection("Users");
// const doc=collection.doc("Jaganathkumar13@gmail.com");
//     doc.set({name:"jaganath"})
// }






    // console.log("db",db)
    // console.log("props",props)
    // const data= db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });