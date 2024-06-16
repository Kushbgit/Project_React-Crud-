import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Crud/Layout";
import Home from "./Crud/Home";
import Insert from "./Crud/Insert";
import Display from "./Crud/Display";
import Update from "./Crud/Update";
import Rec_edit from "./Crud/RecEdit";
import Search from "./Crud/Search";

const Comp_App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="update" element={<Update/>} />
      <Route path="edit/:id" element={<Rec_edit/>} />
      <Route path="search" element={<Search/>}/>
    </Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default Comp_App;
