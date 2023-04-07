import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import showCart from "../../Store/showCart";
import { showcartActions } from "../../Store/showCart";

const NavbarCartButton = (props) => {
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(showcartActions.showCart());
  };

  return (
    <>
      <Button
        variant="primary"
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
          padding: "2px 20px",
        }}
        // onClick={props.cartShowHandler}
        onClick={showCartHandler}
      >
        Cart
      </Button>
    </>
  );
};

export default NavbarCartButton;
