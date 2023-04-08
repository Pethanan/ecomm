import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart";

const NavbarCartButton = (props) => {
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(cartActions.showCart());
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
