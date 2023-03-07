import React, { useState } from "react";
import ShoppingItemsList from "../ShoppingMenu/ShoppingItemsList";
import Cart from "../Cart/Cart";
import NavbarHeader from "../NavBar/NavbarHeader";
import { useContext } from "react";

import AuthCtx from "../../Store/auth-ctx";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

function ProductsStore() {
  const authCtx = useContext(AuthCtx);
  const [isCartShowButtoClicked, setIsCartShowButtoClicked] = useState(false);

  const [addedCartItems, setAddedCartItems] = useState(cartElements);

  const cartShowHandler = () => {
    setIsCartShowButtoClicked((prev) => !prev);
  };

  const addToCartHandler = async (item) => {
    await fetch(
      `https://crudcrud.com/api/c3fb3f74b4664fc984c74a2a0afae50b/cart_maually`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setAddedCartItems([...addedCartItems, item]);
    console.log(addedCartItems);
    console.log(authCtx.userMail);
  };

  return (
    <React.Fragment>
      <NavbarHeader cartShowHandler={cartShowHandler}></NavbarHeader>
      <ShoppingItemsList
        cartShowHandler={cartShowHandler}
        addToCartHandler={addToCartHandler}
      />
      {isCartShowButtoClicked && <Cart cartItems={addedCartItems}></Cart>}
    </React.Fragment>
  );
}

export default ProductsStore;
