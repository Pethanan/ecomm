import { useContext } from "react";
import CartCtx from "../../Store/cart-ctx";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartCtx);
  const price = ` $ ${props.price.toFixed(2)}`;

  const removeFromCartHandler = () => {
    cartCtx.removeFromCart(props.id);
  };
  const addToCartHandler = () => {
    cartCtx.addToCart(props.item);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h5>{props.title}</h5>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeFromCartHandler}>−</button>
        <button onClick={addToCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
