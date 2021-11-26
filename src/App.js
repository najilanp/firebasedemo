import "./App.css";
import firebase from "./Firebase";
import {useState, useEffect} from "react";


function App() {

  const ref = firebase.firestore().collection("developers")
  console.log(ref);

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

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


  useEffect(() => {
    getData()
    console.log(data);
  }, [])
    
    
    
    
    return (
    <div className="App">
   <h1>heloo</h1>

   {loader === false && (data.map((dev) => {

    <div key={dev.id}>
    <h1>Name : {dev.name}</h1>
    <p>Skill : {dev.skill}</p>

    </div>

     }))}
   </div>
  );
}

export default App;
