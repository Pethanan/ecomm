import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartCtx from "../../Store/cart-ctx";
import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const ctx = useContext(CartCtx);
  const addToCartHandler = () => {
    ctx.addToCart(props.item);
    console.log(props.item);
  };
  return (
    <Button
      variant="success"
      item={props.item}
      as="input"
      type="button"
      value="Add to Cart"
      className={classes["order-btn"]}
      onClick={addToCartHandler}
    />
  );
};

export default AddToCartButton;
