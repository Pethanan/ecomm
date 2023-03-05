import React from "react";
import NavbarCartButton from "./NavbarCartButton";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./NavbarHeader.module.css";
import ProductsStore from "../Routes/ProductsStore";

const NavbarHeader = (props) => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/index" className={classes.navlinks}>
                Home
              </Nav.Link>
              <Nav.Link href="/Products" className={classes.navlinks}>
                Store
              </Nav.Link>
              <Nav.Link href="/About" className={classes.navlinks}>
                About
              </Nav.Link>
              <Nav.Link href="/Login" className={classes.navlinks}>
                Login
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
