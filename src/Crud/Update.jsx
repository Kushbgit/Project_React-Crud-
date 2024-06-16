import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import editimg from"../assets/images/EditIcon.png";
import delimg from"../assets/images/TrashCane.png";
const Update=()=>{
    
    const[myData , setData]=useState([])
    const navigate=useNavigate();

    const getdata=()=>{
         
        axios.get("http://localhost:3000/user").then((res)=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        getdata();
    },[])
    
    const myDel=(myid)=>{
        let api=`http://localhost:3000/user/${myid}`
        axios.delete(api).then((res)=>{
            alert("Record deleted successfully");
            getdata();

        })
    }

    const myEdit=(id)=>{
        navigate("/edit/"+id)
    }

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
                <td>
                  <a href="" onClick={()=>{myEdit(key.id)}}>  <img src={editimg} width="30" /></a>
                </td>
                <td>
                  <a href="" onClick={()=>{myDel(key.id)}}>  <img src={delimg} width="30" /></a>
                </td>
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
                <th>Edit </th>
                <th>Delete</th>
            </tr>
            {ans}
        </table>
        </div>
       
        </>
    )
}
export default Update;
