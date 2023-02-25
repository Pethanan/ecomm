import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const addToCartHandler = () => {
    props.addToCartHandler(props.item);
    console.log(props.item);
  };
  return (
    <Button
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
