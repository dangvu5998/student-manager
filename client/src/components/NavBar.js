import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => (
  <Navbar collapseOnSelect> 
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/dashboard">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
      </Nav>
    </Navbar.Collapse>    
  </Navbar>
)
export default NavBar