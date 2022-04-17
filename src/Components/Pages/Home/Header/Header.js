import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
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
            <Link to="/login">Login</Link>
            {/* <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About us</CustomLink>
            <CustomLink to="/Login">Login</CustomLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
