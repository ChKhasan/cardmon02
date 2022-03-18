import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('blat');
  return (
    <Container>
      <Navbar color="light" expand="md" light>
        <NavLink className="navbar-brand" to="/">
          Cardmon
        </NavLink>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar className={isOpen ? "show " : ""}>
          <Nav className="me-auto w-100 d-flex justify-content-center" navbar>
          <NavItem className="d-flex">
              <NavLink className="nav-link d-flex justify-content-start" to="/category">
                Category
              </NavLink>
              <NavLink className="nav-link d-flex justify-content-start" to="/operations">
                Operations
              </NavLink>
            
            </NavItem>
       
            
          </Nav>
        </Collapse>
      </Navbar>
      {props.children}
    </Container>
  );
};

export default Layout;
