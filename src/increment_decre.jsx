import { useState } from "react";

const Increment=()=>{
  const [cnt, setCnt]= useState(0);
return(
  <>
  <center>
    <h1>Counter app in ReactJS </h1>
    <h1>Count : {cnt}</h1>
    <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
    <button onClick={()=>{setCnt(cnt-1)}}>Increment</button>
  </center>
  </>

)
}
