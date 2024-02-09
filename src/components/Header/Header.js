import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Example</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={({ isActive }) => `header__link ${isActive && 'header__link-active'}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `header__link ${isActive && 'header__link-active'}`} to="/users">Users</NavLink>
            <NavLink className={({ isActive }) => `header__link ${isActive && 'header__link-active'}`} to="/photos">Photos</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
