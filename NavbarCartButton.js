import React from "react";
import { Button } from "react-bootstrap";
import classes from "./NavbarCartButton.module.css";

const NavbarCartButton = (props) => {
  return (
    <Button className={classes["nav-btn"]} onClick={props.cartShowHandler}>
      Cart
    </Button>
  );
};

export default NavbarCartButton;
