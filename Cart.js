import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartCtx from "../../Store/cart-ctx";

const Cart = (props) => {
  const cartCtx = useContext(CartCtx);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          id={item.id}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      <h1>Cart Items</h1>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
