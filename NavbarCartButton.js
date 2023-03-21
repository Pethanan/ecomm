import React from "react";
import { Button } from "react-bootstrap";

const NavbarCartButton = (props) => {
  return (
    <>
      <Button
        variant="primary"
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
          padding: "2px 20px",
        }}
        onClick={props.cartShowHandler}
      >
        Cart
      </Button>
    </>
  );
};

export default NavbarCartButton;
