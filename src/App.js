import "./App.css";
import {useState,useEffect} from "react";
import firebase from "./Firebase";
import DataBlock from "./DataBlock";
import FbCreate from "./FbCreate";

const ref = firebase.firestore().collection("developers")


function App() {

  // console.log(ref);

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
    // console.log(data);
  }, [])
    
    return (
    <div className="App">
   <h1>Heloo Developers</h1>

    {loader === false ?
    (data.map((dev) => (
   

         <DataBlock dev={dev} /> 
    
    
    ))):null}

     <FbCreate />
  
   </div>
  );
}
export {ref};
export default App;
