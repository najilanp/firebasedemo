import React from "react";

function DataBlock({dev}){
    return(
     <div>
        <h1>Name : {dev.name}</h1>
        <p>Skill : {dev.skill}</p>

     </div> 

    );
}

export default DataBlock;