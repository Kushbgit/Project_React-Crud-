
import { useState } from "react";

const Color=()=>{
  const [color, setColor]= useState("Red");
return(
  <>
  <center>
    <h1 style={{backgroundColor:color}}> My Color : {color} </h1>
  
    <button onClick={()=>{setColor("Green")}}>Green</button>
    <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
    <button onClick={()=>{setColor("Orange")}}>Orange</button>
    <button onClick={()=>{setColor("Blue")}}>Blue</button>
  </center>
  </>

)
}
