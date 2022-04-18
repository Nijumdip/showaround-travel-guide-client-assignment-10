import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import './Header.css';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Showaround Travel Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pt-4">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About Me</Link>
            <h5 className="displayName mx-4 primary">{user?.displayName && user.displayName}</h5>
            {
              user ?
              <Button onClick={handleSignOut} variant="primary mb-2">Sign Out</Button>
              :
              <Link to="login"><Button variant="primary mb-2">Login</Button></Link>  
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
