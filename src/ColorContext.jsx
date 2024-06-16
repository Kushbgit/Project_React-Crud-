import { createContext, useState } from "react";
const Bgcolorcontext=createContext();

const ColorContext=({children})=>{

     const [color, setColor]=useState("Orange");
     return(
        <>
        <Bgcolorcontext.Provider value={{color,setColor}}>
            {children}
        </Bgcolorcontext.Provider>
        </>
     )
}
