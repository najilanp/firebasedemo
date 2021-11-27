import "./App.css";
import firebase from "./Firebase";
import {useState, useEffect} from "react";


function App() {

  const ref = firebase.firestore().collection("developers")
  
 
  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

  
  useEffect(() => {
   
    getData();
    
  }, [])
  
    

  function getData(){

    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      console.log(items);
      setdata(items)
      setloader(false)
    })
  }

    
    
    return (
    <div className="App">
   <h1>heloo</h1>

   {loader===false?(
   data.map((dev) => {
     return(
    <>
   
    <h1>Name : {dev.name}</h1>
    
    <p>Skill : {dev.skill}</p>

    
    </>
     )

   })):null}
   </div>
  );
}

export default App;
