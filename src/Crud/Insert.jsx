import { useState } from "react";
import axios from "axios";
import '../assets/css/input.css';

const Insert=()=>{
    const [input , setinput]=useState({});

    const formhandle=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinput(values=>({...values , [name]:value}))
    }

    const savedata=()=>{
        let url="http://localhost:3000/user";
        axios.post(url , input).then(()=>{
            alert("Data Saved Successfully!")
        })
    }
   
   
    return(
        <>
        <div className="input_container insert_bg">
        <h3>Please Fill The Form</h3> <br/>
        <div className="insertess">
        Enter Roll No.: <input type="text" name="rollno" onChange={formhandle}/> <br/>
         Enter Name.: <input type="text" name="name" onChange={formhandle}/> <br/>
         Enter City: <input type="text" name="city" onChange={formhandle}/> <br/>
         Enter Course Name: <input type="text" name="course" onChange={formhandle}/> <br/>
         Enter Fees: <input type="text" name="fees" onChange={formhandle}/> <br/>   
        </div>
         
        <button onClick={savedata}>Save Data!</button>
        </div>
        
         </>
    )
}
export default Insert;
