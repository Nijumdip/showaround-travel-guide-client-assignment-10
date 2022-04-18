import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import './Header.css';


const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Showaround Travel Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/checkout">CheckOut</Link>
            <Link to="/blog">Blog</Link>
            <span className="displayName mx-2">{user?.displayName && user.displayName}</span>
            {
              user?.uid ?
              <Button onClick={() => signOut(auth)} variant="primary">Sign Out</Button>
              :
              <Link to="login">Login</Link>  
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
