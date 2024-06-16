import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assets/css/recEdit.css';

const Rec_edit=()=>{
    const [mydata,setdata]=useState({});
    const{id}=useParams();
    const navigate=useNavigate();
    const loaddata=()=>{
            let api=`http://localhost:3000/user/${id}`
            axios.get(api).then((res=>{
                setdata(res.data)
            }))
    }

    useEffect(()=>{
        loaddata();
    },[])

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata(values=>({...values,[name]:value}));
    }
    
    const editsave=(e)=>{
        e.preventDefault();
        let url=`http://localhost:3000/user/${id}`
        axios.put(url , mydata).then((res)=>{
            alert("Data Successfully Updated")
            navigate("display")
        })
    }
    
    
    return(
        <>
        <div className="rec_Container">
        <h3>Edit Record</h3>
             Edit Roll no.: <input type="text" name="rollno" value={mydata.rollno} onChange={handleinput} />
             <br/>
             Edit Name: <input type="text" name="name" value={mydata.name} onChange={handleinput} />
             <br/>
             Edit Course: <input type="text" name="course" value={mydata.course} onChange={handleinput} />
             <br/>
             Edit Fees: <input type="text" name="fees" value={mydata.fees} onChange={handleinput} />
             <br/>
             <button onClick={editsave}>Update!</button>
        </div>
          
        </>
    )
}
export default Rec_edit;
