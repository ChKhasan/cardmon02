import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";

class Layout extends Component {
  render() {
    return (
      <Container>
        <Nav className="mb-3">
          <div>

          <NavItem>
            <NavLink className="nav-link" to="/">
              Home ({this.props.todosNumber || 0})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/done">
              Todos Done ({this.props.todosDoneNumber || 0})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/deleted">
              Todos Deleted ({this.props.todosDeletedNumber || 0})
            </NavLink>
          </NavItem>
          </div>
          
        </Nav>
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
