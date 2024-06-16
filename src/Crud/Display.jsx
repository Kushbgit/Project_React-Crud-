import { useState , useEffect } from "react";
import axios from "axios";
import "../assets/css/display.css"
const Display=()=>{
    
    const[myData , setData]=useState([])

    const getdata=()=>{
         
        axios.get("http://localhost:3000/user").then((res)=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        getdata();
    },[])
    
    const ans=myData.map((key)=>{
        return(
            <>
            
            <tr>
                <td>{key.id}</td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.course}</td>
                <td>{key.fees}</td>
            </tr>
           
            </>
        )
    })
    
    
    return(
        <>
        <div className="displayTable">
        <table align="center" width="500" bgcolor="yellow">
            <tr bgcolor="orange">
                <th>ID</th>
                <th>Roll no.</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
         </div>
        </>
    )
}
export default Display;
