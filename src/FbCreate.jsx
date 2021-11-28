import React,{useState} from "react";
import {ref} from "./App";


function FbCreate(){

    const[name,setname] = useState("")
    const[skill,setskill] = useState("")

    function createDoc(newDataObj){
      
      ref
      .doc()
      .set(newDataObj)
      .catch((err) =>{
        alert(err);
        console.log(err);
      })
       
    }
   
    return(
        <div>

        <input type="text" id="name1" placeholder="name" onChange={(e) => setname(e.target.value)} />
        <input type="text"id="skill1" placeholder="skill" onChange={(e) => setskill(e.target.value)} />
        <button onClick={() =>{ 
          createDoc({name,skill})
          document.getElementById("name1").value =""
          document.getElementById("skill1").value =""

        }} >click to create new doc</button>

        </div>
    )
}

export default FbCreate;