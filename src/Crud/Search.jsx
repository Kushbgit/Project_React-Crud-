import { useState } from "react";
import axios from "axios";
import "../assets/css/search.css"

const Search=()=>{
   const[rollno ,setroll]=useState("")
   const[mydata , setmydata]=useState([])

   const handlesubmit=()=>{
    let url=`http://localhost:3000/user?rollno=${rollno}`;
         axios.get(url).then((res)=>{
        setmydata(res.data);
    })
   }

   const ans=mydata.map((key)=>{
    return(
        <>
        <h1>Name : {key.name} Rollno.: {key.rollno}</h1>
        <h2>City : {key.city}</h2>
        <h3>Course: {key.course}  Fees: {key.fees}</h3>
        </>
    )
   })
   
    return(
        <>
        <div className="search_container search_bg">
        <h3>Search Student Records</h3>
        Enter Roll No: <input type="text" value={rollno} onChange={(e)=>{setroll(e.target.value)}} />
        <button onClick={handlesubmit}>Search</button>
        <hr/>
        {ans}
        </div>
        
        </>
    )
}
export default Search;
