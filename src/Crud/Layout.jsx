import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './footer';

import { Link , Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Data</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="insert">Insert</Nav.Link>
            <Nav.Link href="display">Display</Nav.Link>
            <Nav.Link href="update">Update</Nav.Link>
            <Nav.Link href="search">Search</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;
