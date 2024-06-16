import {createContext, useState } from "react";
const loginContext=createContext();
const UserContext=({children})=>{
    const [user, setUser]=useState({name:"", email:"", auth:false});
    const setDetail=(username, useremail)=>{
        setUser({name:username, email:useremail, auth:true})
    }
    const logout=()=>{
        setUser({name:"", email:"", auth:false})
    }
    return(
        <>
        <loginContext.Provider value={(user, setDetail, logout)}>
            {children}
            </loginContext.Provider>
        </>
    )
}
export default UserContext;
export {loginContext};