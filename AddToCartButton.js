import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
// import CartCtx from "../../Store/cart-ctx";
import classes from "./AddToCartButton.module.css";
import { cartActions } from "../../Store/cart";

const AddToCartButton = (props) => {
  // const ctx = useContext(CartCtx);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addItem(props.item));
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
