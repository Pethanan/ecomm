import React from "react";
import { useDispatch } from "react-redux";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartCtx from "../../Store/cart-ctx";
import { showcartActions } from "../../Store/showCart";

const Cart = (props) => {
  const cartCtx = useContext(CartCtx);
  const dispatch = useDispatch();

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

  const closeCartHandler = () => {
    dispatch(showcartActions.closeCart());
  };

  return (
    <Modal>
      <h1>Cart Items</h1>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
