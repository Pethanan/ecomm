import React from "react";
import NavbarCartButton from "./NavbarCartButton";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./NavbarHeader.module.css";

const NavbarHeader = (props) => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing" className={classes["nav-links"]}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#features" className={classes["nav-links"]}>
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className={classes["nav-links"]}>
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
              <NavbarCartButton
                cartShowHandler={props.cartShowHandler}
              ></NavbarCartButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarHeader;
