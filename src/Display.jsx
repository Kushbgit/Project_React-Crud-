import axios from "axios";
import { useState, useEffect } from "react";

const Display=()=>{
    const [mydata, setmydata] =useState([]);

    const loadData=()=>{
        let url="http://localhost:3000/Students";
        axios.get(url).then((res)=>{
            setmydata(res.data);
        });
    }
    useEffect(()=>{
        loadData();
    }, []);

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    });
    return(
        <>
        <h1>Display</h1>
        <table border="2" align="center" width="500" bgcolor="yellow">
            <tr>
                <th>ROllNo</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        
        </>

    )
};
export default Display;